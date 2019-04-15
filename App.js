import React, { Component } from 'react';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const params = {
    lines: [
        {
            background: getRandomColor(),
            updateTime: 1000,
            elements: [
                {
                    background: getRandomColor(),
                    width: 25
                },
                {
                    background: getRandomColor(),
                    width: 35
                },
                {
                    background: getRandomColor(),
                    width: 20
                }
            ]
        },
        {
            background: getRandomColor(),
            updateTime: 1500,
            elements: [
                {
                    background: getRandomColor(),
                    width: 20
                },
                {
                    background: getRandomColor(),
                    width: 15
                },
                {
                    background: getRandomColor(),
                    width: 20
                }
            ]
        },
        {
            background: getRandomColor(),
            updateTime: 2000,
            elements: [
                {
                    background: getRandomColor(),
                    width: 10
                },
                {
                    background: getRandomColor(),
                    width: 10
                },
                {
                    background: getRandomColor(),
                    width: 10
                }
            ]
        },
        {
            background: getRandomColor(),
            updateTime: 2500,
            elements: [
                {
                    background: getRandomColor(),
                    width: 25
                },
                {
                    background: getRandomColor(),
                    width: 15
                },
                {
                    background: getRandomColor(),
                    width: 20
                }
            ]
        },
    ]
};

class App extends Component {
    componentDidMount()
    {
        function changeDivBackground (elem, index)
        {
            elem.style.background = getRandomColor();
            setTimeout (changeDivBackground, params.lines[index].updateTime, elem, index)
        }

        const divList = document.body.querySelectorAll ('div.changeColor');
        for (let i = 0; i < divList.length; i++)
        {
            changeDivBackground (divList[i], i);
        }
    }

  render() {
    const windowHeight = window.innerHeight;
    const linesLength = params.lines.length;
    const linesHeight = windowHeight/linesLength;
  return (
      <div>
          {params.lines.map((line, index)=> {
              return (
                  <div className="changeColor" key={index} style={{
                      background: line.background,
                      height: linesHeight,
                      width: '100%'}}>
                      {line.elements.map((elem, index)=>{
                          return(
                              <div key={index} style={{
                                  background: elem.background,
                                  height: linesHeight,
                                  float: 'left',
                                  width: `${elem.width}%`}}/>)
                      })}
                  </div>
              )
          })}
      </div>
    );
  }
}

export default App;
