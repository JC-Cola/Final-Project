// AI select function
const select=document.getElementById('timeSelect')
select.addEventListener('change', function () {
    const selected = select.value;

    localStorage.setItem('length',selected)

    console.log(`${localStorage.getItem('length')}`)
  });