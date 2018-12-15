(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{136:function(e,t,a){"use strict";a.r(t);a(69),a(70),a(68);var n=a(6),s=a.n(n),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(139),d=a.n(c),u=a(150),m=a(146),p=a(152),y=a.n(p),f=a(164),g=a.n(f),h=a(176),v=a.n(h),b=a(202),E=a.n(b),A=a(179),S=a.n(A),w=a(204),k=a.n(w),M=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.company,n=e.date,s=e.listItems,o=e.noPadding,l=e.classes;return r.a.createElement(g.a,null,r.a.createElement(v.a,{disableGutters:!0,className:o?l.noPadding:null},r.a.createElement(S.a,{classes:{secondary:l.secondary,primary:l.primary},primary:t?r.a.createElement(i.Fragment,null,t,n&&r.a.createElement("span",{className:l.right},n)):null,secondary:a})),s&&s.map(function(e){return r.a.createElement(v.a,{key:e,className:l.noPadding},r.a.createElement(E.a,null,r.a.createElement(k.a,{className:l.bullet})),r.a.createElement(S.a,{classes:{root:l.noPadding,secondary:l.secondary2},secondary:e}))}))},t}(i.Component);M.propTypes={classes:l.a.object.isRequired};var D=Object(u.a)(Object(m.withStyles)(function(e){return{secondary:{fontSize:14,color:e.status.greyDk},secondary2:{fontSize:12,color:e.status.greyDk,padding:0},primary:{fontWeight:600,color:e.status.greyDk},right:{float:"right",fontWeight:500,fontSize:12},bullet:{width:12,height:12},noPadding:{padding:0}}})(M)),P=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.company,n=e.date,s=e.listItems,o=e.classes;return r.a.createElement(g.a,null,r.a.createElement(v.a,{disableGutters:!0},r.a.createElement(S.a,{classes:{secondary:o.secondary,primary:o.primary},primary:r.a.createElement(i.Fragment,null,t,n&&r.a.createElement("span",{className:o.right},n)),secondary:a})),s&&s.map(function(e){return r.a.createElement(v.a,{key:e,disableGutters:!0},r.a.createElement(S.a,{classes:{secondary:o.secondary2},secondary:e}))}))},t}(i.Component);P.propTypes={classes:l.a.object.isRequired};var C=Object(u.a)(Object(m.withStyles)(function(e){return{secondary:{fontSize:14,color:e.status.greyDk},secondary2:{fontSize:12,color:e.status.greyDk},primary:{fontWeight:600,color:e.status.greyDk},right:{float:"right",fontSize:12,fontWeight:500}}})(P)),I=a(205);a.d(t,"pageQuery",function(){return j});var R=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.classes,n=t.allImageSharp.edges.find(function(e){return e.node.fluid.src.includes("author")});return r.a.createElement(I.a,{img:n},r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.col1},r.a.createElement(y.a,{variant:"subtitle1",color:"primary",className:a.title},"education"),r.a.createElement(C,{title:"Master’s Degree",date:"Graduated 2012",company:"Auburn University (Auburn, AL, USA)",listItems:["Estimation of Survival of the Atlantic Horseshoe Crab, Limulus polyphemus, by Analysis of Mark-Recapture Data with Tag Loss"]}),r.a.createElement(C,{title:"Bachelor of Science",date:"Graduated 2008",company:"University of Washington (Seattle, WA, USA)",listItems:["Major in Biology and a Minor in Applied Mathematics"]}),r.a.createElement(y.a,{variant:"subtitle1",color:"primary",className:d()(a.title,a.paddingTop)},"languages"),r.a.createElement(D,{title:"English",date:"Proficient, Native",noPadding:!0}),r.a.createElement(D,{title:"German",date:"Intermediate: B1.2",noPadding:!0}),r.a.createElement(D,{title:"French",date:"Beginner: A2.1",noPadding:!0}),r.a.createElement(y.a,{variant:"subtitle1",color:"primary",className:d()(a.title,a.paddingTop)},"skills"),r.a.createElement("div",{className:a.skills},r.a.createElement(D,{company:"Languages",listItems:["Javascript","R","Python","GraphQL"]}),r.a.createElement(D,{company:"Development",listItems:["React","Gatsby","Redux","Material-UI","Bootstrap","Styled Components"]}),r.a.createElement(D,{company:"Charting",listItems:["Highcharts","ggplot2","Shiny","D3.js"]}))),r.a.createElement("div",{className:a.col2},r.a.createElement(y.a,{variant:"subtitle1",color:"primary",className:a.title},"experience"),r.a.createElement(D,{title:"Data Specialist",date:"July 2017 - Present",company:"OSB AG Ingenieur- und IT-Dienstleistungen (Munich, Germany)",listItems:["Developed shopper science tool for the analysis of customer data","Expert front end web development skills using React","Expert chart developer using Highcharts"]}),r.a.createElement(D,{title:"Part-time Lecturer",date:"June 2017 - July 2017",company:"Globe Business College Munich (Munich, Germany)",listItems:["Lectured for course, 'Quantative Analysis for Business'"]}),r.a.createElement(D,{title:"Junior Analyst",date:"June 2015 - Feburary 2017",company:"Tempest Technologies Consulting (Los Angeles, CA, USA)",listItems:["Developed user interface for a government funded project to assist the biomedical industry in Experimental Design (Webpage Development with; (backend) Python, Node, SQLite / (frontend) AngularJS, bootstrap / (testing) Karma, Protractor)","Developed online statistical tools to calculate statistical power and sample size (R, Shiny and SQLite)","Teamed with analysts and engineers from within the company as well as client personnel to accomplish projects"]}),r.a.createElement(D,{title:"Customer Service and Merchandising Associate",date:"January 2015 - June 2015",company:"Design Public (Los Angeles, CA, USA)",listItems:["Assisted with daily customer interactions maintaining 100% satisfaction rating","Data Entry for inventory and updates to website when necessary"]}),r.a.createElement(D,{title:"Research Associate in Data Analysis",date:"January 2013 - January 2015",company:"University of Quebec at Rimouski (Rimouski, QC, Canada)",listItems:["Contributed to the development of a model to simulate and optimize individual tree growth under changing climatic conditions that focuses on the competition between differing neighboring species using Bayesian methods","Developed and lead short course 'Use of Maximum Likelihood Methods for Ecology'","Completed preliminary analyses on the effects of different distributions for basic stochastic models","Completed data management for a dataset consisting of over 100,000 rows in R and Python"]}),r.a.createElement(D,{title:"Masters Research Associate: Analysis of Survival Models for United States Geological Survey",date:"January 2011 - January 2013",company:"Auburn University (Auburn, AL, USA)",listItems:["Designed and developed a multistate model to estimate adult survival of the Atlantic Horseshoe crab, Limulus polyphemus.  Model analyzed ten years of mark-resight data with the incorporation of a bias from tag loss.  Results used to improve populations of managed Horseshoe crab harvests for United States Geological Survey.","Published Results","Expert Program MARK (Life Survival Models) and Statistics Program R programmer","Audited a variety of Structured Decision Making workshops held at Auburn University","Advanced coursework and workshops in Survival Models, Maximum Likelihood Methods, and Regression Analysis"]}),r.a.createElement(D,{title:"Supervisor, Accreditation Analyst",date:"January 2009 - December 2010",company:"Pali Institute (Running Springs, CA, USA)",listItems:["Western Association of Schools and Colleges Accreditation Analyst","Managed the instructional staff, training and daily program activities","Successfully carried out school’s renewal of accreditation with final reports and tour of program goals to measure and validate student achievement","Assessed school’s action plan success using California academic standards and WASC criteria"]}))))},t}(i.Component);R.propTypes={classes:l.a.object.isRequired};t.default=Object(u.a)(Object(m.withStyles)(function(e){var t;return{root:(t={display:"flex",justifyContent:"space-between",flexWrap:"wrap",padding:15,flexDirection:"column-reverse"},t[e.breakpoints.up("sm")]={paddingTop:30,paddingBottom:90,paddingLeft:"10%",paddingRight:"10%"},t[e.breakpoints.up("md")]={paddingTop:30,paddingBottom:90,flexDirection:"row"},t),col1:{flexBasis:"30%"},col2:{flexBasis:"65%"},title:{letterSpacing:5,paddingBottom:15,paddingTop:15,textTransform:"uppercase"},paddingTop:{paddingTop:45},skills:{display:"flex",justifyContent:"space-between"}}})(R));var j="3941034921"},202:function(e,t,a){"use strict";var n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.default}});var s=n(a(203))},203:function(e,t,a){"use strict";var n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var s=n(a(137)),i=n(a(138)),r=n(a(0)),o=(n(a(4)),n(a(139))),l=n(a(140)),c=function(e){return{root:{marginRight:16,color:e.palette.action.active,flexShrink:0,display:"inline-flex"}}};function d(e){var t=e.children,a=e.classes,n=e.className,l=(0,i.default)(e,["children","classes","className"]);return r.default.createElement("div",(0,s.default)({className:(0,o.default)(a.root,n)},l),t)}t.styles=c,d.propTypes={};var u=(0,l.default)(c,{name:"MuiListItemIcon"})(d);t.default=u},204:function(e,t,a){"use strict";var n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),i=(0,n(a(149)).default)(s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),s.default.createElement("path",{d:"M6 6h12v12H6z"})),"Stop");t.default=i}}]);
//# sourceMappingURL=component---src-pages-resume-js-2a1c8dc0021663c6535a.js.map