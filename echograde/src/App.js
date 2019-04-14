import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase"

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

      gpatotal: 0

    }



    const skyward = require('skyward-rest')

    const url = 'https://skyward.kleinisd.net/scripts/wsisa.dll/WService=wsEAplus/seplog01.w';

    const scraper = skyward(url); // the scraper!

    const user = 's549571';
    const pass = '549571Bj';

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
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {


    const skyward = require('skyward-rest')

    const url = 'https://skyward.kleinisd.net/scripts/wsisa.dll/WService=wsEAplus/seplog01.w';

    const scraper = skyward(url); // the scraper!

    const user = 's549571';
    const pass = '549571Bj';


    if ((this.state.isFetched1) === true) {
      console.log("fetched 1")
      scraper.scrapeGradebook(user, pass, { course: this.state.per1Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class1grade = (gradeData.grade);
          console.log(gradeData.grade);

          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            this.setState({
              class1w: true,
              class1Grade: class1grade
            })
          }
        });
      this.setState({
        isFetched1: false,

      })

    }
    else if ((this.state.isFetched2) === true) {
      console.log("fetched 2")
      scraper.scrapeGradebook(user, pass, { course: this.state.per2Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class2grade = (gradeData.grade);
          console.log(gradeData.grade);

          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            this.setState({
              class2w: true,
              class2grade: class2grade
            })
          }
        });
      this.setState({
        isFetched2: false,

      })

    }
    else if ((this.state.isFetched3) === true) {
      console.log("fetched 3")
      scraper.scrapeGradebook(user, pass, { course: this.state.per3Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class3grade = (gradeData.grade);
          console.log(gradeData.grade);
          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            this.setState({
              class3w: true,
              class3Grade: class3grade
            })
          }
        });
      this.setState({
        isFetched3: false,

      })

    }

    else if ((this.state.isFetched4) === true) {
      console.log("fetched 4")
      scraper.scrapeGradebook(user, pass, { course: this.state.per4Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class4grade = (gradeData.grade);
          console.log(gradeData.grade);
          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            this.setState({
              class4w: true,
              class4Grade: class4grade
            })
          }
        });
      this.setState({
        isFetched4: false,

      })

    }

    else if ((this.state.isFetched5) === true) {
      console.log("fetched 5")
      scraper.scrapeGradebook(user, pass, { course: this.state.per5Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class5grade = (gradeData.grade);
          console.log(gradeData.grade);
          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            this.setState({
              class5w: true,
              class5Grade: class5grade
            })
          }
        });
      this.setState({
        isFetched5: false,

      })

    }

    else if ((this.state.isFetched6) === true) {
      console.log("fetched 6")
      scraper.scrapeGradebook(user, pass, { course: this.state.per6Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          var class6grade = (gradeData.grade);
          //alert(gradeData.gradebook[1].assignments[0]);
          console.log(gradeData.grade);
          if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
            this.setState({
              class6w: true,
              class6Grade: class6grade
            })
          }
        });
      this.setState({
        isFetched6: false,

      })

    }

    else if ((this.state.isFetched7) === true) {
      console.log("fetched 7")
      scraper.scrapeGradebook(user, pass, { course: this.state.per7Num, bucket: 'SEM 1' })
        .then(({ data }) => {
          let gradeData = data // gradebook
          //alert(gradeData.gradebook[1].assignments[0]);
          var class7grade = (gradeData.grade);
          if (gradeData.course.indexOf('AP') > -1) {
            console.log("AP Course")
            if ((gradeData.course.indexOf('AP') > -1) || (gradeData.course.indexOf('PreAP')) || (gradeData.course.indexOf('(DC)'))) {
              this.setState({
                class7w: true,
                class7Grade: class7grade
              })
            }
          }
        });
      this.setState({
        isFetched7: false,

      })

    }


    else {
      console.log("awaiting")
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
          gpa2 = 0;
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
          gpa2 = 0;
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
    } else if (this.state.class4w  == false) {
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

    if (this.state.class5 == true) {
      let countGrade = 100;
      let basegpa = 6;
      for (let j = 0; j < 1000; j++) {
        if (p5g == countGrade) {
          gpa5 = basegpa;
        } else {
          countGrade--;
          basegpa = basegpa - 0.1;
        }
        if (p5g < 70) {
          gpa5 = 0;
        }
      }
    } else if (p5w == false) {
      let countGrade = 100;
      let basegpa = 6;
      for (let j = 0; j < 1000; j++) {
        if (p5g == countGrade) {
          gpa5 = basegpa;
        } else {
          countGrade--;
          basegpa = basegpa - 0.1;
        }
        if (p5g < 70) {
          gpa5 = 0;
        }
      }
    }

    // period 6

    if (p6w == true) {
      let countGrade = 100;
      let basegpa = 6;
      for (let j = 0; j < 1000; j++) {
        if (p6g == countGrade) {
          gpa6 = basegpa;
        } else {
          countGrade--;
          basegpa = basegpa - 0.1;
        }
        if (p6g < 70) {
          gpa6 = 0;
        }
      }
    } else if (p6w == false) {
      let countGrade = 100;
      let basegpa = 6;
      for (let j = 0; j < 1000; j++) {
        if (p6g == countGrade) {
          gpa6 = basegpa;
        } else {
          countGrade--;
          basegpa = basegpa - 0.1;
        }
        if (p6g < 70) {
          gpa6 = 0;
        }
      }
    }

    // period 7

    if (p7w == true) {
      let countGrade = 100;
      let basegpa = 6;
      for (let j = 0; j < 1000; j++) {
        if (p7g == countGrade) {
          gpa7 = basegpa;
        } else {
          countGrade--;
          basegpa = basegpa - 0.1;
        }
        if (p7g < 70) {
          gpa7 = 0;
        }
      }
    } else if (p7w == false) {
      let countGrade = 100;
      let basegpa = 6;
      for (let j = 0; j < 1000; j++) {
        if (p7g == countGrade) {
          gpa7 = basegpa;
        } else {
          countGrade--;
          basegpa = basegpa - 0.1;
        }
        if (p7g < 70) {
          gpa7 = 0;
        }
      }
    }

    var gpaTotal = (gpa1 + gpa2 + gpa3 + gpa4 + gpa5 + gpa6 + gpa7) / 7;
    console.log(gpa1);








  }




  render() {
    return (
      <div className="App">
        <div className="header">
          <a href="#" id="menu-action">
            <i className="fa fa-bars"></i>
            <span>Close</span>
          </a>
          <div className="logo">
            Simple Admin
          </div>
        </div>
        <div className="sidebar">
          <ul>
            <li><a href="#"><i className="fa fa-desktop"></i><span>Desktop</span></a></li>
            <li><a href="#"><i className="fa fa-server"></i><span>Server</span></a></li>
            <li><a href="#"><i className="fa fa-calendar"></i><span>Calendar</span></a></li>
            <li><a href="#"><i className="fa fa-envelope-o"></i><span>Messages</span></a></li>
            <li><a href="#"><i className="fa fa-table"></i><span>Data Table</span></a></li>
          </ul>
        </div>


        <div className="main">
          <div className="hipsum">
            <div className="jumbotron">
              <h1 id="hello,-world!">Hello, world!<a className="anchorjs-link" href="#hello,-world!"><span className="anchorjs-icon"></span></a></h1>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <p><a className="btn btn-primary" href="#" role="button">Learn more</a></p>
            </div>
            <p>Keffiyeh banjo keytar selfies. Actually plaid PBR&amp;B, High Life dreamcatcher kale chips master cleanse craft beer messenger bag locavore Brooklyn Blue Bottle. Freegan literally brunch kale chips small batch. Etsy iPhone gentrify photo booth. Lomo
          keffiyeh vinyl, distillery pop-up messenger bag kale chips post-ironic DIY 90's keytar. Intelligentsia next level Pitchfork forage vinyl Marfa, normcore heirloom. Drinking vinegar asymmetrical roof party, yr artisan Carles mixtape jean shorts.</p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <p>Slow-carb fanny pack yr Brooklyn gentrify. Fanny pack keffiyeh taxidermy, ugh viral polaroid craft beer. +1 distillery Truffaut typewriter tousled crucifix, lo-fi butcher normcore skateboard. Drinking vinegar ugh whatever sriracha. Synth tofu viral
          butcher flexitarian. 3 wolf moon Schlitz plaid small batch kale chips blog. Fingerstache selfies freegan, Helvetica Neutra Brooklyn semiotics cred narwhal beard tousled leggings.</p>
            <div className="row">
              <div className="col-sm-6">
                <p>Slow-carb fanny pack yr Brooklyn gentrify. Fanny pack keffiyeh taxidermy, ugh viral polaroid craft beer. +1 distillery Truffaut typewriter tousled crucifix, lo-fi butcher normcore skateboard. Drinking vinegar ugh whatever sriracha. Synth tofu
              viral butcher flexitarian. 3 wolf moon Schlitz plaid small batch kale chips blog. Fingerstache selfies freegan, Helvetica Neutra Brooklyn semiotics cred narwhal beard tousled leggings.</p>
              </div>
              <div className="col-sm-6">
                <p>Slow-carb fanny pack yr Brooklyn gentrify. Fanny pack keffiyeh taxidermy, ugh viral polaroid craft beer. +1 distillery Truffaut typewriter tousled crucifix, lo-fi butcher normcore skateboard. Drinking vinegar ugh whatever sriracha. Synth tofu
              viral butcher flexitarian. 3 wolf moon Schlitz plaid small batch kale chips blog. Fingerstache selfies freegan, Helvetica Neutra Brooklyn semiotics cred narwhal beard tousled leggings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
