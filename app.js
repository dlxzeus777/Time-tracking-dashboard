const datas = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


const previous = document.querySelectorAll('.last');
const lastTimes = document.querySelectorAll('.last-time');
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const hours = document.querySelectorAll('.time');


monthly.addEventListener('click', () =>
{
    for(let last of previous)
    {
        last.innerHTML = 'Month';
    }
    datas.forEach((data, index) => 
    {
        lastTimes[index].innerHTML = data.timeframes.monthly.previous;
        hours[index].innerHTML = `${data.timeframes.monthly.current}hrs`;
    })
})

weekly.addEventListener('click', () =>
{
    for(let last of previous)
    {
        last.innerHTML = 'Week';
    }
    datas.forEach((data, index) => 
    {
        lastTimes[index].innerHTML = data.timeframes.weekly.previous;
        hours[index].innerHTML = `${data.timeframes.weekly.current}hrs`;
    })
})

daily.addEventListener('click', () =>
{
    for(let last of previous)
    {
        last.innerHTML = 'Day';
    }
    datas.forEach((data, index) => 
    {
        lastTimes[index].innerHTML = data.timeframes.daily.previous;
        hours[index].innerHTML = `${data.timeframes.daily.current}hrs`;
    })
})