export const buttonsData = [
  {
    className: 'btn-1',
    link: 'btn-1',
    content: "button",
    title: "Button #1",
    html: '<button className="btn-1"> Button </button>',
    showDetail: <a href="/buttons/btn-1" className="btn-1">Button</a>,
    sourceCode: `
        .btn-1 {
            background-color: #141414;
            border: 1px solid rgba(54, 54, 54, 0.6);
            font-weight: 600;
            position: relative;
            outline: none;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            height: 45px;
            width: 130px;
            opacity: 1;
            color: #fff;
        }
        `

  },
  {
    className: 'btn-2',
    link: 'btn-2',
    content: "button",
    title: "Button #2",
    showDetail: <a href="/buttons/btn-2" className="btn-2">Button</a>,
    html: '<button className="btn-2"> Button </button>',
    sourceCode: `
        .btn-2 {
            color: #1cc49d;
            background-color: #1b2f31;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 3em;
            width: 8em;
            font-size: large;
            font-weight: 600;
          }
        `
  },
  {
    className: 'btn-3',
    link: 'btn-3',
    content: "button",
    title: "Button #3",
    showDetail: <a href="/buttons/btn-3" className="btn-3">Button</a>,
    html: '<button className="btn-3"> Button </button>',
    sourceCode: `
        .btn-3 {
            display: inline-block;
            padding: 0.5em 1.7em;
            margin: 0 0.1em 0.1em 0;
            border: 0.16em solid rgba(255, 255, 255, 0);
            background-color: rgb(80, 10, 172);
            border-radius: 2em;
            box-sizing: border-box;
            text-decoration: none;
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            color: #ffffff;
            text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
            text-align: center;
            transition: all 0.2s;
          
            &:hover {
              border-color: rgb(255, 255, 255);
            }
          }
        `
  },
  {
    className: 'btn-4',
    link: 'btn-4',
    content: "button",
    title: "Button #4",
    showDetail: <a href="/buttons/btn-4" className="btn-4">Button</a>,
    html: '<button className="btn-4"> Button </button>',
    sourceCode: `
        .btn-4 {
            display: inline-block;
            padding: 0.5em 1.7em;
            margin: 0 0.1em 0.1em 0;
            border: 0.16em solid rgb(255, 255, 255);
            border-radius: 2em;
            box-sizing: border-box;
            text-decoration: none;
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            color: #ffffff;
            text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
            text-align: center;
            transition: all 0.2s;
          
            &:hover {
              color: black;
              background-color: rgb(255, 255, 255);
            }
          }
        `
  },
  {
    className: 'btn-5',
    link: 'btn-5',
    content: "button",
    title: "Button #5",
    showDetail: <a href="/buttons/btn-5" className="btn-5">Button</a>,
    html: `<button className="btn-5"> Button </button>`,
    sourceCode: `
        .btn-5 {
            display: inline-block;
            padding: 0.6em 1.7em;
            border: 0.1em solid #ffffff;
            margin: 0 0.3em 0.3em 0;
            border-radius: 0.12em;
            box-sizing: border-box;
            text-decoration: none;
            font-family: "Roboto", sans-serif;
            font-weight: 300;
            color: #ffffff;
            text-align: center;
            transition: all 0.2s;
          
            &:hover {
              color: #000000;
              background-color: #ffffff;
            }
          }
        `
  },
  {
    className: 'btn-6',
    link: 'btn-6',
    content: "button",
    title: "Button #6",
    showDetail: <a href="/buttons/btn-6" className="btn-6">Button</a>,
    html: '<button className="btn-6"> Button </button>',
    sourceCode: `
        .btn-6 {
            border-color: #ffffff;
            padding: 0.6em 2.3em;
            cursor: pointer;
            font-size: 1em;
            color: #ffffff;
            background-image: linear-gradient(45deg, transparent 50%, #1d8ad8 50%);
            background-position: 25%;
            background-size: 400%;
            -webkit-transition: background 500ms ease-in-out, color 500ms ease-in-out;
            transition: background 500ms ease-in-out, color 500ms ease-in-out;
          
            &:hover {
              color: #ffffff;
              background-position: 100%;
            }
          }
        `
  },
  {
    className: 'btn-7',
    link: 'btn-7',
    content: "button",
    title: "Button #7",
    showDetail: <a href="/buttons/btn-7" className="btn-7">Button</a>,
    html: '<button className="btn-7"> Button </button>',
    sourceCode: `
        .btn-7 {
            display: inline-block;
            padding: 0.65em 1.6em;
            border: 3px solid #ffffff;
            margin: 0 0.3em 0.3em 0;
            border-radius: 0.12em;
            box-sizing: border-box;
            text-decoration: none;
            font-family: "Roboto", sans-serif;
            font-weight: 300;
            color: #ffffff;
            text-align: center;
            transition: all 0.2s;
            animation: btn-7 5s infinite linear;
            position: relative;
          
            &:hover {
              background-color: white;
              color: #000000;
            }
          }

          @keyframes btn-7 {
            0% {
              top: 0em;
            }
          
            40% {
              top: 0em;
            }
          
            43% {
              top: -0.9em;
            }
          
            46% {
              top: 0em;
            }
          
            48% {
              top: -0.4em;
            }
          
            50% {
              top: 0em;
            }
          
            100% {
              top: 0em;
            }
          }
        `
  },
  {
    className: 'btn-8',
    link: 'btn-8',
    content: "button",
    title: "Button #8",
    showDetail: <a href="/buttons/btn-8" className="btn-8">Button</a>,
    html: '<button className="btn-8"> Button </button>',
    sourceCode: `
        .btn-8 {
            display: inline-block;
            padding: .75rem 1.25rem;
            border-radius: 10rem;
            color: #fff;
            text-transform: uppercase;
            font-size: 1rem;
            letter-spacing: .15rem;
            transition: all .3s;
            position: relative;
            overflow: hidden;
            z-index: 1;

                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #0cf;
                    border-radius: 10rem;
                    z-index: -2;
                }

                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 100%;
                    background-color: #1cc49d;
                    transition: all .3s;
                    border-radius: 10rem;
                    z-index: -1;
                }

                &:hover {
                    color: #fff;

                &:before {
                   width: 100%;
                }
            }
    
        `
  },
  {
    className: 'btn-9',
    link: 'btn-9',
    content: "button",
    title: "Button #9",
    showDetail: <a href="/buttons/btn-9" className="btn-9">Button</a>,
    html: '<button className="btn-9"> Button </button>',
    sourceCode: `
        .btn-9 {
            display: inline-block;
            padding: 15px 30px;
            font-size: 18px;
            background-color: #3498db;
            color: #ffffff;
            border: none;
            border-radius: 30px;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s, transform 0.1s;
          }
          
          .btn-9:hover {
            background-color: #2980b9;
            transform: scale(1.05);
          }
        `

  },
  {
    className: 'btn-10',
    link: 'btn-10',
    content: "button",
    title: "Button #10",
    showDetail: <a href="/buttons/btn-10" className="btn-10">Button</a>,
    html: '<button className="btn-10"> Button </button>',
    sourceCode: `
        .btn-10 {
            display: inline-block;
            padding: 12px 24px;
            font-size: 18px;
            background-color: #ff6b6b;
            color: #fff;
            border: none;
            border-radius: 50px;
            text-align: center;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s, transform 0.1s;
          }
        `
  },
  {
    className: 'btn-11',
    link: 'btn-11',
    content: "button",
    title: "Button #11",
    showDetail: <a href="/buttons/btn-11" className="btn-11">Button</a>,
    html: '<button className="btn-11"> Button </button>',
    sourceCode: `
        .btn-11 {
            display: inline-block;
            outline: 0;
            border: 0;
            cursor: pointer;
            font-size: 30px;
            text-decoration: none;
            line-height: 1;
            position: relative;
            padding: 10px;
            background: #1abebf;
            background-image: linear-gradient(122deg, #37e0e0, #1abebe);
            background-size: 300px, 300px, 100%;
            color: #fff;
            border-bottom: 5px solid #ffc600;
            box-shadow: 0 0 3px 3px rgb(0 0 0 / 5%);
            text-shadow: 0 0 3px rgb(0 0 0 / 30%);
            transition: all .3s;
          
            &:hover {
              box-shadow: 0 0 3px 3px rgb(0 0 0 / 8%);
            }
          }
        `
  },
  {
    className: 'btn-12',
    link: 'btn-12',
    content: "button",
    title: "Button #12",
    showDetail: <a href="/buttons/btn-12" className="btn-12">Button</a>,
    html: '<button className="btn-12"> Button </button>',
    sourceCode: `
        .btn-12 {
            outline: 0;
            grid-gap: 8px;
            align-items: center;
            background-color: #ff90e8;
            color: #000;
            border: 1px solid #000;
            border-radius: 4px;
            cursor: pointer;
            display: inline-flex;
            flex-shrink: 0;
            font-size: 16px;
            gap: 8px;
            justify-content: center;
            line-height: 1.5;
            overflow: hidden;
            padding: 12px 16px;
            text-decoration: none;
            text-overflow: ellipsis;
            transition: all .14s ease-out;
            white-space: nowrap;
          
            &:hover {
              box-shadow: 4px 4px 0 #fff;
              transform: translate(-4px, -4px);
            }
          
            &:focus-visible {
              outline-offset: 1px;
            }
          }
        `
  },
  {
    className: 'btn-13',
    link: 'btn-13',
    content: "button",
    title: "Button #13",
    showDetail: <a href="/buttons/btn-13" className="btn-13">Button</a>,
    html: '<button className="btn-13"> Button </button>',
    sourceCode: `
        .btn-13 {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            padding: 15px 40px;
            text-align: center;
            border: none;
            background-size: 300% 100%;
            border-radius: 50px;
            transition: all 0.4s ease-in-out;
            background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a, #fbb03b);
            box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
          }
          
          .btn-13:hover {
            background-position: 100% 0;
            transition: all 0.4s ease-in-out;
          }
          
          .btn-13:focus {
            outline: none;
          }
        `
  },
  {
    className: 'btn-14',
    link: 'btn-14',
    content: "button",
    title: "Button #14",
    showDetail: <a href="/buttons/btn-14" className="btn-14">Button</a>,
    html: '<button className="btn-14"> Button </button>',
    sourceCode: `
        .btn-14 {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            padding: 15px 40px;
            text-align: center;
            border: none;
            background-size: 300% 100%;
            border-radius: 50px;
            transition: all 0.4s ease-in-out;
            background-image: linear-gradient(to right, #3498db, #7b68ee, #49a09d, #f3b760);
            box-shadow: 0 4px 15px 0 rgba(123, 104, 238, 0.75);
          }
          
          .btn-14:hover {
            background-position: 100% 0;
            transition: all 0.4s ease-in-out;
          }
          
          .btn-14:focus {
            outline: none;
          } 
        `
  },
  {
    className: 'btn-15',
    link: 'btn-15',
    content: "button",
    title: "Button #15",
    showDetail: <a href="/buttons/btn-15" className="btn-15">Button</a>,
    html: '<button className="btn-15"> Button </button>',
    sourceCode: `
        .btn-15 {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            padding: 15px 40px;
            text-align: center;
            border: none;
            background-size: 300% 100%;
            border-radius: 50px;
            transition: all 0.4s ease-in-out;
            background-image: linear-gradient(to right, #f0a500, #f68a1e, #d46f00, #ff8a00);
            box-shadow: 0 4px 15px 0 rgba(255, 138, 0, 0.75);
          }
          
          .btn-15:hover {
            background-position: 100% 0;
            transition: all 0.4s ease-in-out;
          }
          
          .btn-15:focus {
            outline: none;
          }
        `
  },
  {
    className: 'btn-16',
    link: 'btn-16',
    content: "button",
    title: "Button #16",
    showDetail: <a href="/buttons/btn-16" className="btn-16">Button</a>,
    html: '<button className="btn-16"> Button </button>',
    sourceCode: `
        .btn-16 {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            padding: 15px 40px;
            text-align: center;
            border: none;
            background-size: 300% 100%;
            border-radius: 50px;
            transition: all 0.4s ease-in-out;
            background-image: linear-gradient(to right, #264046, #7c36f0, #e747f0, #f07c36);
            box-shadow: 0 4px 15px 0 rgba(120, 55, 240, 0.75);
          }
          
          .btn-16:hover {
            background-position: 100% 0;
            transition: all 0.4s ease-in-out;
          }
          
          .btn-16:focus {
            outline: none;
          }
        `
  },
  {
    className: 'btn-17',
    link: 'btn-17',
    content: "button",
    title: "Button #17",
    showDetail: <a href="/buttons/btn-17" className="btn-17">Button</a>,
    html: '<button className="btn-17"> Button </button>',
    sourceCode: `
        .btn-17 {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            padding: 15px 40px;
            text-align: center;
            border: none;
            background-size: 300% 100%;
            border-radius: 50px;
            transition: all 0.4s ease-in-out;
            background-image: linear-gradient(to right, #00c1a9, #07a0c9, #0669a3, #1d1b2f);
            box-shadow: 0 4px 15px 0 rgba(13, 25, 94, 0.75);
          }
          
          .btn-17:hover {
            background-position: 100% 0;
            transition: all 0.4s ease-in-out;
          }
          
          .btn-17:focus {
            outline: none;
          }
        `
  },
  {
    className: 'btn-18',
    link: 'btn-18',
    content: "button",
    title: "Button #18",
    showDetail: <a href="/buttons/btn-18" className="btn-18">Button</a>,
    html: '<button className="btn-18"> Button </button>',
    sourceCode: `
        .btn-18 {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            padding: 15px 40px;
            text-align: center;
            border: none;
            background-size: 300% 100%;
            border-radius: 50px;
            transition: all 0.4s ease-in-out;
            background-image: linear-gradient(to right, #A74DC3, #663399, #9400D3, #FF00FF);
            box-shadow: 0 4px 15px 0 rgba(102, 51, 153, 0.75);
          }
          
          .btn-18:hover {
            background-position: 100% 0;
            transition: all 0.4s ease-in-out;
          }
          
          .btn-18:focus {
            outline: none;
          }
        `
  },
  {
    className: 'btn-19',
    link: 'btn-19',
    content: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/2560px-Facebook.svg.png" alt="Facebook" />,
    title: "Facebook Button",
    html: `<a href="/buttons/19" className="btn-19"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/2560px-Facebook.svg.png" alt="Facebook" /></a>`,
  },
  {
    className: 'btn-20',
    link: 'btn-20',
    content: <img src='https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png' alt='Microsoft' />,
    title: "Microsoft Button",
    html: `<a href="/buttons/20" className="btn-20"><img src='https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png' alt='Microsoft' /></a>`
  },
  {
    className: 'btn-21',
    link: 'btn-21',
    content: <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />,
    title: "App Store Button",
    html: `<a href="/buttons/21" className="btn-21"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" /></a>`
  },
  {
    className: 'btn-22',
    link: 'btn-22',
    content: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" />,
    title: "Google Play Button",
    html: `<a href="/buttons/22" className="btn-22"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" /></a>`
  },
  {
    className: 'btn-23',
    link: 'btn-23',
    content: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoRlaUiElDiQyaBJvEdW0PdfkCHgfKTfnysp-4nI5Fs_iurhKl1ql8VbuF4hmMCpttec&usqp=CAU" alt="Instagram" />,
    title: "Instagram Button",
    html: `<a href="/buttons/23" className="btn-23"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoRlaUiElDiQyaBJvEdW0PdfkCHgfKTfnysp-4nI5Fs_iurhKl1ql8VbuF4hmMCpttec&usqp=CAU" alt="Instagram" /></a>`
  },
  {
    className: 'btn-24',
    link: 'btn-24',
    content: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGQ439GZtQJNnvjnpE6yON2QrLvXoOGowP6-N9tXa3QBLJ8mQcGgBn0UFnZGgZihAWZk&usqp=CAU" alt="TikTok" />,
    title: "TikTok Button",
    html: `<a href="/buttons/24" className="btn-24"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGQ439GZtQJNnvjnpE6yON2QrLvXoOGowP6-N9tXa3QBLJ8mQcGgBn0UFnZGgZihAWZk&usqp=CAU" alt="TikTok" /></a>`
  },
  {
    className: 'btn-25',
    link: 'btn-25',
    content: "button",
    title: "Button #25",
    showDetail: <a href="/buttons/btn-25" className="btn-25">Button</a>,
    html: '<button className="btn-25"> Button </button>',
    sourceCode: `
        .btn-25 {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: none;
            transition-duration: .5s;
            transform: rotateX(45deg);
            box-shadow: 0px 10px 5px rgba(0, 0, 0, .3);
            cursor: pointer;
            background: #1b2f31;
            color: #fff;
            width: 100px;
            height: 100px;
          
            &:hover {
              transform: scale(1.2);
              background-color: #1da1f2;
              box-shadow: none;
            }
          }
        `
  },
  {
    className: 'btn-26 slide_down',
    link: 'btn-26',
    content: "Slide down",
    title: "Slide Down Button",
    showDetail: <a href="/buttons/btn-26" className="btn-26 slide_down">Slide down</a>,
    html: '<button className="btn-26"> Slide down </button>',
    sourceCode: `
        .btn-26 {
            color: #FFF;
            border: 2px solid rgb(216, 2, 134);
            border-radius: 0px;
            padding: 18px 16px;
            display: inline-block;
            font-family: "Lucida Console", Monaco, monospace;
            font-size: 14px;
            letter-spacing: 1px;
            cursor: pointer;
            box-shadow: inset 0 0 0 0 #D80286;
            -webkit-transition: ease-out 0.4s;
            -moz-transition: ease-out 0.4s;
            transition: ease-out 0.4s;
            font-family: 'Poppins', sans-serif;
          }
          
          .slide_down:hover {
            box-shadow: inset 0 100px 0 0 #D80286;
          }
        `
  },
  {
    className: 'btn-27 slide_right',
    link: 'btn-27',
    content: "Slide right",
    title: "Slide Right Button",
    showDetail: <a href="/buttons/btn-27" className="btn-27 slide_right">Slide right</a>,
    html: '<button className="btn-27"> Slide right </button>',
    sourceCode: `
        .btn-27 {
            color: #FFF;
            border: 2px solid rgb(216, 2, 134);
            border-radius: 0px;
            padding: 18px 16px;
            display: inline-block;
            font-family: "Lucida Console", Monaco, monospace;
            font-size: 14px;
            letter-spacing: 1px;
            cursor: pointer;
            box-shadow: inset 0 0 0 0 #D80286;
            -webkit-transition: ease-out 0.4s;
            -moz-transition: ease-out 0.4s;
            transition: ease-out 0.4s;
            font-family: 'Poppins', sans-serif;
          }
          
          .slide_right:hover {
            box-shadow: inset 0 100px 0 0 #D80286;
          }
        `
  },
  {
    className: 'btn-28 slide_left',
    link: 'btn-28',
    content: "Slide left",
    title: "Slide Left Button",
    showDetail: <a href="/buttons/btn-27" className="btn-28 slide_left">Slide left</a>,
    html: '<button className="btn-27"> Slide left </button>',
    sourceCode: `
        .btn-27 {
            color: #FFF;
            border: 2px solid rgb(216, 2, 134);
            border-radius: 0px;
            padding: 18px 16px;
            display: inline-block;
            font-family: "Lucida Console", Monaco, monospace;
            font-size: 14px;
            letter-spacing: 1px;
            cursor: pointer;
            box-shadow: inset 0 0 0 0 #D80286;
            -webkit-transition: ease-out 0.4s;
            -moz-transition: ease-out 0.4s;
            transition: ease-out 0.4s;
            font-family: 'Poppins', sans-serif;
          }
          
          .slide_left:hover {
            box-shadow: inset 0 100px 0 0 #D80286;
          }
        `
  },
  {
    className: 'btn-29 slide_diagonal',
    link: 'btn-29',
    content: "Slide diagonal",
    title: "Slide Diagonal Button",
    showDetail: <a href="/buttons/btn-28" className="btn-28 slide_diagonal">Slide diagonal</a>,
    html: '<button className="btn-28"> Slide diagonal </button>',
    sourceCode: `
        .btn-28 {
            color: #FFF;
            border: 2px solid rgb(216, 2, 134);
            border-radius: 0px;
            padding: 18px 16px;
            display: inline-block;
            font-family: "Lucida Console", Monaco, monospace;
            font-size: 14px;
            letter-spacing: 1px;
            cursor: pointer;
            box-shadow: inset 0 0 0 0 #D80286;
            -webkit-transition: ease-out 0.4s;
            -moz-transition: ease-out 0.4s;
            transition: ease-out 0.4s;
            font-family: 'Poppins', sans-serif;
          }
          
          .slide_left:hover {
            box-shadow: inset 0 100px 0 0 #D80286;
          }
        `
  },
  {
    className: 'btn-30',
    link: 'btn-30',
    content: "button",
    title: "Button #30",
    showDetail: <a href="/buttons/btn-30" className="btn-30">Button</a>,
    html: '<button className="btn-30"> Button </button>',
    sourceCode: `
        .btn-30 {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            animation: pulse 2s infinite;
          }

        @keyframes pulse {
            0% {
              transform: scale(1);
            }
          
            50% {
              transform: scale(1.1);
            }
          
            100% {
              transform: scale(1);
            }
          }
        `
  },
  {
    className: 'btn-31',
    link: 'btn-31',
    content: "button",
    title: "Button #31",
    showDetail: <a href="/buttons/btn-31" className="btn-31">Button</a>,
    html: '<button className="btn-31"> Button </button>',
    sourceCode: `
        .btn-31 {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            animation: spin 4s linear infinite, color-change 4s linear infinite;
          }
          
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
          
            100% {
              transform: rotate(360deg);
            }
          }
          
          @keyframes color-change {
            0%,
            100% {
              background-color: #3498db;
            }
          
            50% {
              background-color: #e74c3c;
            }
          }
        `
  },
  {
    className: 'btn-32',
    link: 'btn-32',
    content: "button",
    title: "Button #32",
    showDetail: <a href="/buttons/btn-32" className="btn-32">Button</a>,
    html: '<button className="btn-32"> Button </button>',
    sourceCode: `
        .btn-32 {
            display: inline-block;
            padding: 10px 20px;
            background: linear-gradient(45deg, #3498db, #e74c3c);
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
          }
          
          .btn-32:hover {
            background: linear-gradient(45deg, #e74c3c, #3498db);
          }
        `
  },
  {
    className: 'btn-33',
    link: 'btn-33',
    content: "button",
    title: "Button #33",
    showDetail: <a href="/buttons/btn-33" className="btn-33">Button</a>,
    html: '<button className="btn-33"> Button </button>',
    sourceCode: `
        .btn-33 {
            display: inline-block;
            padding: 15px 30px;
            background-color: transparent;
            color: #fff;
            border: none;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            border-radius: 30px;
            background-image: linear-gradient(90deg, #6515b0, #3498db);
            background-size: 200% 100%;
            transition: background-position 0.5s, color 0.3s;
            animation: border-animation 3s linear infinite;
          }
          
          .btn-33:hover {
            background-position: -100% 0;
            color: #ff6b6b;
          }

          @keyframes border-animation {
            0% {
              background-image: linear-gradient(90deg, #ba1313, #3498db);
              background-position: 0 0;
            }
          
            100% {
              background-position: 100% 0;
            }
          }
        `
  },
  {
    className: 'btn-34',
    link: 'btn-34',
    content: "button",
    title: "Button #34",
    showDetail: (
      <a href="/buttons/btn-34" className="btn-34">
        Button
      </a>
    ),
    html: '<button className="btn-34"> Button </button>',
    sourceCode: `
      .btn-34 {
        margin: 10px;
        padding: 15px 30px;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;
        border-radius: 10px;
        display: block;
        border: 0px;
        font-weight: 700;
        box-shadow: 0px 0px 14px -7px #f09819;
        background-image: linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%);
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }
  
      .button-34:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
      }
  
      .button-34:active {
        transform: scale(0.95);
      }
    `,
  },

];

