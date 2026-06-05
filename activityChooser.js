// Discover all activity modules (don't load them yet)
const activityModules = {
    ...import.meta.glob('/lab*/activity*.js'),
    ...import.meta.glob('/lab*/activity*/index.js')
};

// Extract activity numbers and sort
const activities = Object.keys(activityModules)
    .map(path => ({
        lab: parseInt(path.match(/lab(\d+)/)[1]),
        num: parseInt(path.match(/activity(\d+)/)[1]),
        path: path
    }))
    .sort((a, b) => parseInt(a.num) - parseInt(b.num));

// Load saved path or default to first
const savedPath = localStorage.getItem('activityPath') || activities[0].path;

const dropdown = document.querySelector('#activityDropdown');

// Populate dropdown with optgroups by lab number
{
    // Group activities by lab number
    const byLab = activities.reduce((groups, activity) => {
        const { lab, num, path } = activity;
        if (!groups[lab]) groups[lab] = [];
        groups[lab].push({ num, path });
        return groups;
    }, {});

    // Build optgroups
    Object.keys(byLab)
        .sort((a, b) => Number(a) - Number(b))
        .forEach(lab => {
            const group = document.createElement('optgroup');
            group.label = `Lab ${lab}`;
            byLab[lab].forEach(({ num, path }) => {
                const option = document.createElement('option');
                option.value = path;
                option.textContent = `Lab ${lab} Activity ${num}`;
                group.appendChild(option);
            });
            dropdown.appendChild(group);
        });
    dropdown.value = savedPath;
}

// Load module using the stored path
const loadActivity = async (path) => {
    try {
        const module = await activityModules[path]();
        console.log('Loaded:', path);
        return module;
    } catch (e) {
        console.log(e); //TODO Show on screen
        throw e;
        localStorage.removeItem('activityPath');
    }
};

// Load on dropdown change
dropdown.addEventListener('change', async (event) => {
    localStorage.setItem('activityPath', event.target.value);
    window.location.reload();
});

document.querySelector('#activityChooserControls').style.display = 'block';

export default await loadActivity(savedPath);