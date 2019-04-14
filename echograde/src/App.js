import React, { Component } from 'react';
import './App.css';
import firebase from "firebase"
import $ from "jquery"
import { Line } from "react-chartjs-2";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from "reactstrap";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA9_Kfh5qE6_0F4Md0DpnPd6ZMgG7W80oI",
  authDomain: "echogrades.firebaseapp.com",
  databaseURL: "https://echogrades.firebaseio.com",
  projectId: "echogrades",
  storageBucket: "",
  messagingSenderId: "57021306093"
};
firebase.initializeApp(config);





const options = {
  tooltips: {
    enabled: true,
  },
  maintainAspectRatio: false
};






let Dashboard = (() => {
  let global = {
    tooltipOptions: {
      placement: "right"
    },
    menuClass: ".c-menu"
  };

  let menuChangeActive = el => {
    let hasSubmenu = ($(el).hasClass("has-submenu"));
    $(global.menuClass + " .is-active").removeClass("is-active");
    $(el).addClass("is-active");

    // if (hasSubmenu) {
    // 	$(el).find("ul").slideDown();
    // }
  };

  let sidebarChangeWidth = () => {
    let $menuItemsTitle = $("li .menu-item__title");

    $("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
    $(".hamburger-toggle").toggleClass("is-opened");

    if ($("body").hasClass("sidebar-is-expanded")) {
      $('[data-toggle="tooltip"]').tooltip("destroy");
    } else {
    }

  };

  return {
    init: () => {
      $(".js-hamburger").on("click", sidebarChangeWidth);

      $(".js-menu li").on("click", e => {
        menuChangeActive(e.currentTarget);
      });
    }
  };
})();

Dashboard.init();




/*
############################################################
############################################################
############################################################
 C H A N G E    D E M O     L O G I N     H E R E
############################################################
############################################################
############################################################
*/


const demoUsername = 's549571';
const demoPassword = '549571Bj';

/*
############################################################
############################################################
############################################################
 C H A N G E    D E M O     L O G I N     H E R E
############################################################
############################################################
############################################################
*/

class App extends Component {






  constructor(props) {


    super(props);
    this.state = {
      isFetched1: false,
      isFetched2: false,
      isFetched3: false,
      isFetched4: false,
      isFetched5: false,
      isFetched6: false,
      isFetched7: false,
      class1Grade: 0,
      class2Grade: 0,
      class3Grade: 0,
      class4Grade: 0,
      class5Grade: 0,
      class6Grade: 0,
      class7Grade: 0,
      per1Num: 0,
      per2Num: 0,
      per3Num: 0,
      per4Num: 0,
      per5Num: 0,
      per6Num: 0,
      per7Num: 0,

      // period 1
      p1term1: 0,
      p1term2: 0,
      p1term3: 0,
      p1term4: 0,
      p1term5: 0,
      p1term6: 0,
      p1sem1: 0,
      p1term7: 0,
      p1term8: 0,
      p1term9: 0,
      p1term10: 0,
      p1term11: 0,
      p1term12: 0,
      p1sem2: 0,

      p2term1: 0,
      p2term2: 0,
      p2term3: 0,
      p2term4: 0,
      p2term5: 0,
      p2term6: 0,
      p2sem1: 0,
      p2term7: 0,
      p2term8: 0,
      p2term9: 0,
      p2term10: 0,
      p2term11: 0,
      p2term12: 0,
      p2sem2: 0,

      p3term1: 0,
      p3term2: 0,
      p3term3: 0,
      p3term4: 0,
      p3term5: 0,
      p3term6: 0,
      p3sem1: 0,
      p3term7: 0,
      p3term8: 0,
      p3term9: 0,
      p3term10: 0,
      p3term11: 0,
      p3term12: 0,
      p3sem2: 0,

      p4term1: 0,
      p4term2: 0,
      p4term3: 0,
      p4term4: 0,
      p4term5: 0,
      p4term6: 0,
      p4sem1: 0,
      p4term7: 0,
      p4term8: 0,
      p4term9: 0,
      p4term10: 0,
      p4term11: 0,
      p4term12: 0,
      p4sem2: 0,

      p5term1: 0,
      p5term2: 0,
      p5term3: 0,
      p5term4: 0,
      p5term5: 0,
      p5term6: 0,
      p5sem1: 0,
      p5term7: 0,
      p5term8: 0,
      p5term9: 0,
      p5term10: 0,
      p5term11: 0,
      p5term12: 0,
      p5sem2: 0,

      p6term1: 0,
      p6term2: 0,
      p6term3: 0,
      p6term4: 0,
      p6term5: 0,
      p6term6: 0,
      p6sem1: 0,
      p6term7: 0,
      p6term8: 0,
      p6term9: 0,
      p6term10: 0,
      p6term11: 0,
      p6term12: 0,
      p6sem2: 0,

      p7term1: 0,
      p7term2: 0,
      p7term3: 0,
      p7term4: 0,
      p7term5: 0,
      p7term6: 0,
      p7sem1: 0,
      p7term7: 0,
      p7term8: 0,
      p7term9: 0,
      p7term10: 0,
      p7term11: 0,
      p7term12: 0,
      p7sem2: 0,

      class1w: false,
      class2w: false,
      class3w: false,
      class4w: false,
      class5w: false,
      class6w: false,
      class7w: false,

      gpatotal: 0,

      line: {},
      p1name: "",
      p2name: "",
      p3name: "",
      p4name: "",
      p5name: "",
      p6name: "",
      p7name: "",

      redirectref: ""

    }



    const skyward = require('skyward-rest')

    const url = 'https://skyward.kleinisd.net/scripts/wsisa.dll/WService=wsEAplus/seplog01.w';

    const scraper = skyward(url); // the scraper!

    const user = demoUsername
    const pass = demoPassword

    scraper.scrapeReport(user, pass)
      .then(({ data }) => {
        var studData = data
        var per1 = studData[1].course
        var per2 = studData[2].course
        var per3 = studData[3].course
        var per4 = studData[4].course
        var per5 = studData[5].course
        var per6 = studData[6].course
        var per7 = studData[7].course




        this.setState({
          per1Num: per1,
          per2Num: per2,
          per3Num: per3,
          per4Num: per4,
          per5Num: per5,
          per6Num: per6,
          per7Num: per7

        })

        console.log(this.state.per1Num)
        console.log(this.state.per2Num)
        console.log(this.state.per3Num)
        console.log(this.state.per4Num)
        console.log(this.state.per5Num)
        console.log(this.state.per6Num)
        console.log(this.state.per7Num)


        this.setState({
          isFetched1: true,
          isFetched2: true,
          isFetched3: true,
          isFetched4: true,
          isFetched5: true,
          isFetched6: true,
          isFetched7: true
        })


      });





  }

  componentDidMount() {




    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    let Dashboard = (() => {
      let global = {
        tooltipOptions: {
          placement: "right"
        },
        menuClass: ".c-menu"
      };

      let menuChangeActive = el => {
        let hasSubmenu = ($(el).hasClass("has-submenu"));
        $(global.menuClass + " .is-active").removeClass("is-active");
        $(el).addClass("is-active");

        // if (hasSubmenu) {
        // 	$(el).find("ul").slideDown();
        // }
      };

      let sidebarChangeWidth = () => {
        let $menuItemsTitle = $("li .menu-item__title");

        $("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
        $(".hamburger-toggle").toggleClass("is-opened");

        if ($("body").hasClass("sidebar-is-expanded")) {
        } else {
        }

      };

      return {
        init: () => {
          $(".js-hamburger").on("click", sidebarChangeWidth);

          $(".js-menu li").on("click", e => {
            menuChangeActive(e.currentTarget);
          });

        }
      };
    })();

    Dashboard.init();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {




    const skyward = require('skyward-rest')

    const url = 'https://skyward.kleinisd.net/scripts/wsisa.dll/WService=wsEAplus/seplog01.w';

    const scraper = skyward(url); // the scraper!

    const user = demoUsername;
    const pass = demoPassword


    if ((this.state.isFetched1) === true) {
      console.log("fetched 1")
      scraper.scrapeGradebook(user, pass, { course: this.state.per1Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class1grade = gradeData.grade;

          var class1Name = gradeData.course
          this.setState({

            p1name: class1Name

          })


          console.log(class1grade);
          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            console.log("AP Course")
            this.setState({
              class1w: true,
              class1Grade: class1grade
            })
          }


          else {
            this.setState({
              class1w: false,
              class1Grade: class1grade
            })
          }


          this.setState({
            isFetched1: false,

          })

        });


    }
    else if ((this.state.isFetched2) === true) {
      console.log("fetched 2")
      scraper.scrapeGradebook(user, pass, { course: this.state.per2Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class2Grade = gradeData.grade;

          var class2Name = gradeData.course
          this.setState({

            p2name: class2Name

          })

          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            console.log("AP Course")
            this.setState({
              class2w: true,
              class2Grade: class2Grade,
              isFetched2: false
            })
          }

          else {
            this.setState({
              class2w: false,
              class2Grade: class2Grade,
              isFetched2: false
            })
          }



        });


    }
    else if ((this.state.isFetched3) === true) {
      console.log("fetched 3")



      scraper.scrapeGradebook(user, pass, { course: this.state.per3Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class3grade = gradeData.grade;
          console.log(class3grade);


          var class3Name = gradeData.course
          this.setState({

            p3name: class3Name

          })

          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            console.log("AP Course")
            this.setState({
              class3w: true,
              class3Grade: class3grade
            })
          }

          else {
            this.setState({
              class3w: false,
              class3Grade: class3grade
            })
          }


          this.setState({
            isFetched3: false,

          })

        });


    }

    else if ((this.state.isFetched4) === true) {
      console.log("fetched 4")
      scraper.scrapeGradebook(user, pass, { course: this.state.per4Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class4grade = gradeData.grade
          console.log(class4grade);


          var class4Name = gradeData.course
          this.setState({

            p4name: class4Name

          })

          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            console.log("AP Course")
            this.setState({
              class4w: true,
              class4Grade: class4grade
            })
          }


          else {
            this.setState({
              class4w: false,
              class4Grade: class4grade
            })
          }



          this.setState({
            isFetched4: false,

          })

        });

    }

    else if ((this.state.isFetched5) === true) {
      console.log("fetched 5")
      scraper.scrapeGradebook(user, pass, { course: this.state.per5Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class5grade = gradeData.grade;
          console.log(class5grade);

          var class5Name = gradeData.course
          this.setState({

            p5name: class5Name

          })

          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            console.log("AP Course")
            this.setState({
              class5w: true,
              class5Grade: class5grade
            })
          }

          else {
            this.setState({
              class5w: false,
              class5Grade: class5grade
            })
          }

          this.setState({
            isFetched5: false,

          })
        });


    }

    else if ((this.state.isFetched6) === true) {
      console.log("fetched 6")
      scraper.scrapeGradebook(user, pass, { course: this.state.per6Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook


          var class6grade = gradeData.grade;

          var class6Name = gradeData.course
          this.setState({

            p6name: class6Name

          })

          console.log(class6grade);
          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            console.log("AP Course")
            this.setState({
              class6w: true,
              class6Grade: class6grade
            })
          }
          else {
            this.setState({
              class6w: false,
              class6Grade: class6grade
            })
          }

          this.setState({
            isFetched6: false,

          })
        });


    }

    else if ((this.state.isFetched7) === true) {
      console.log("fetched 7")
      scraper.scrapeGradebook(user, pass, { course: this.state.per7Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          //alert(gradeData.gradebook[1].assignments[0]);
          var class7grade = gradeData.grade
          console.log(class7grade);

          var class7Name = gradeData.course
          this.setState({

            p7name: class7Name

          })

          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            console.log("AP Course")
            this.setState({
              class7w: true,
              class7Grade: class7grade
            })
          }
          else {
            this.setState({
              class7w: false,
              class7Grade: class7grade
            })
          }



          if (this.state.class1w == true) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class1Grade == countGrade) {
                var gpa1 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class1Grade < 70) {
                gpa1 = 0;
              }
            }
          } else if (this.state.class1w == false) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class1Grade == countGrade) {
                gpa1 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class1Grade < 70) {
                gpa1 = 0;
              }
            }
          }

          // period 2

          if (this.state.class2w == true) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class2Grade == countGrade) {
                var gpa2 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class2Grade < 70) {
                basegpa = 0
                gpa2 = basegpa;
              }
            }
          } else if (this.state.class2w == false) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class2Grade == countGrade) {
                gpa2 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class2Grade < 70) {
                basegpa = 0
                gpa2 = basegpa;
              }
            }
          }





          // period 3

          if (this.state.class3w == true) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class3Grade == countGrade) {
                var gpa3 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class3Grade < 70) {
                gpa3 = 0;
              }
            }
          } else if (this.state.class3w == false) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class3Grade == countGrade) {
                gpa3 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class3Grade < 70) {
                gpa3 = 0;
              }
            }
          }

          // period 4

          if (this.state.class4w == true) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class4Grade == countGrade) {
                var gpa4 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class4Grade < 70) {
                gpa4 = 0;
              }
            }
          } else if (this.state.class4w == false) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class4Grade == countGrade) {
                gpa1 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class4Grade < 70) {
                gpa4 = 0;
              }
            }
          }

          // period 5

          if (this.state.class5w == true) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class5Grade == countGrade) {
                var gpa5 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class5Grade < 70) {
                gpa5 = 0;
              }
            }
          } else if (this.state.class5w == false) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class5Grade == countGrade) {
                gpa5 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class5Grade < 70) {
                gpa5 = 0;
              }
            }
          }

          // period 6

          if (this.state.class6w == true) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class6Grade == countGrade) {
                var gpa6 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class6Grade < 70) {
                gpa6 = 0;
              }
            }
          } else if (this.state.class6w == false) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class6Grade == countGrade) {
                gpa6 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class6Grade < 70) {
                gpa6 = 0;
              }
            }
          }

          // period 7

          if (this.state.class7w == true) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class7Grade == countGrade) {
                var gpa7 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class7Grade < 70) {
                gpa7 = 0;
              }
            }
          } else if (this.state.class7w == false) {
            let countGrade = 100;
            let basegpa = 6;
            for (let j = 0; j < 1000; j++) {
              if (this.state.class7Grade == countGrade) {
                gpa7 = basegpa;
              } else {
                countGrade--;
                basegpa = basegpa - 0.1;
              }
              if (this.state.class7Grade < 70) {
                gpa7 = 0;
              }
            }
          }

          var gpaTotal = (gpa1 + gpa2 + gpa3 + gpa4 + gpa5 + gpa6 + gpa7) / 7
          this.setState({
            gpatotal: gpaTotal
          })
          console.log("gpa1 is" + gpa1)
          console.log("gpa2 is" + gpa2)
          console.log("gpa3 is" + gpa3)
          console.log("gpa4 is" + gpa4)
          console.log("gpa5 is" + gpa5)
          console.log("gpa6 is" + gpa6)
          console.log("gpa7 is" + gpa7)
          console.log("gpa is" + this.state.gpatotal)




          this.setState({
            isFetched7: false,

          })

          const line = {
            labels: [
              "Period 1",
              "Period 2",
              "Period 3",
              "Period 4",
              "Period 5",
              "Period 6",
              "Period 7",
            ],
            datasets: [
              {
                label: "Average Grade Performance",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [this.state.class1Grade, this.state.class2Grade, this.state.class3Grade, this.state.class4Grade, this.state.class5Grade, this.state.class6Grade, this.state.class7Grade]
              }
            ]
          };

          this.setState({
            line: line,
          })


          var points = [this.state.class1Grade, this.state.class2Grade, this.state.class3Grade, this.state.class4Grade, this.state.class5Grade, this.state.class6Grade, this.state.class7Grade]

          points.sort(function (a, b) { return a - b });

          this.setState({
            redirectref: "https://www.khanacademy.org/humanities/us-history/ap-us-history"
          })









        });










    }






    else {
      console.log("awaiting")
    }








  }









  render() {
    return (
      <div className="App sidebar-is-reduced">


        <header className="l-header">
          <div className="l-header__inner clearfix">
            <div className="c-header-icon js-hamburger">
              <div className="hamburger-toggle"><span className="bar-top"></span><span className="bar-mid"></span><span className="bar-bot"></span></div>
            </div>
            <div className="c-header-icon has-dropdown">
            </div>
            <div className="c-search">
              <input className="c-search__input u-input" placeholder="Search..." type="text" />
            </div>
          </div>
        </header>
        <div className="l-sidebar">
          <div className="logo">
            <div className="logo__txt">E</div>
          </div>
          <div className="l-sidebar__content">
            <nav className="c-menu js-menu">
              <ul className="u-list">
                <li className="c-menu__item is-active" data-toggle="tooltip" title="Home">
                  <div className="c-menu__item__inner"><i className="fas fa-home"></i>
                    <div className="c-menu-item__title"><span>Home</span></div>
                  </div>
                </li>
                <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Statistics">
                  <div className="c-menu__item__inner"><i className="far fa-chart-bar"></i>
                    <div className="c-menu-item__title"><span>Statistics</span></div>
                  </div>
                </li>
                <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Schedule">
                  <div className="c-menu__item__inner"><i className="far fa-clock"></i>
                    <div className="c-menu-item__title"><span>Schedule</span></div>
                  </div>
                </li>
                <li className="c-menu__item has-submenu" data-toggle="tooltip" title="Recommendations">
                  <div className="c-menu__item__inner"><i className="fas fa-brain"></i>
                    <div className="c-menu-item__title"><span>Recommendations</span></div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <main className="l-main">
          <div className="content-wrapper content-wrapper--with-bg">
            <h1 className="page-title">Dashboard</h1>
            <div className="page-content">

              <Row className="form-cont"><Col xs="12">


              </Col></Row>
              <Row>
                <Col xs="12">
                  <table className="container">
                    <thead>
                      <tr>
                        <th><h1>Class Name</h1></th>
                        <th>
                          <h1>Period 1</h1>
                          <br>
                          </br>
                          <h3>{this.state.p1name}</h3>
                        </th>
                        <th>
                          <h1>Period 2</h1>
                          <br>
                          </br>
                          <h3>{this.state.p2name}</h3>
                        </th>
                        <th>
                          <h1>Period 3</h1>
                          <br>
                          </br>
                          <h3>{this.state.p3name}</h3>
                        </th>
                        <th>
                          <h1>Period 4</h1>
                          <br>
                          </br>
                          <h3>{this.state.p4name}</h3>
                        </th>
                        <th>
                          <h1>Period 5</h1>
                          <br>
                          </br>
                          <h3>{this.state.p5name}</h3>
                        </th>
                        <th>
                          <h1>Period 6</h1>
                          <br>
                          </br>
                          <h3>{this.state.p6name}</h3>
                        </th>
                        <th>
                          <h1>Period 7</h1>
                          <br>
                          </br>
                          <h3>{this.state.p7name}</h3>
                        </th>
                      </tr>
                      <tr>
                        <th><h1>Grade</h1></th>
                        <td>{this.state.class1Grade}</td>
                        <td>{this.state.class2Grade}</td>
                        <td>{this.state.class3Grade}</td>
                        <td>{this.state.class4Grade}</td>
                        <td>{this.state.class5Grade}</td>
                        <td>{this.state.class6Grade}</td>
                        <td>{this.state.class7Grade}</td>
                      </tr>
                      <tr>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>


                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
              <Row><Col>
                <Card>
                  <CardHeader>
                    <h1 className="white">Current GPA:</h1>
                    <div className="card-header-actions" />
                  </CardHeader>
                  <CardBody>
                    <h1 className="blue underlined">{this.state.gpatotal}</h1>
                  </CardBody>
                </Card>
              </Col></Row>
              <Row>
                <Col xs="12">
                  <Card>
                    <CardHeader>
                      <h1 className="white">Grade Performance</h1>
                      <div className="card-header-actions" />
                    </CardHeader>
                    <CardBody>
                      <div className="chart-wrapper">
                        <Line className="blue" data={this.state.line} options={options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <Card>
                    <CardHeader>
                      <h1 className="white">Course Suggestions</h1>
                      <div className="card-header-actions" />
                    </CardHeader>
                    <CardBody>
                      <h3>Based on your academic performance, here is what we recommend for you!</h3>
                      <div class="button-container">
                        <a target="_blank" href={this.state.redirectref} class="btn"><span>View Material</span></a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>


            </div>
          </div>
        </main>

      </div>

    );
  }
}

export default App;

/*

                <form>
                  <label>
                    <input id="fname" type="text" placeholder="Username..."></input>
                    <span>Username</span>
                  </label>

                  <label>
                    <input type="password" placeholder="Password"></input>
                    <span>Password</span>
                  </label>

                  <input type="submit" value="Submit"></input>
                </form>



*/
