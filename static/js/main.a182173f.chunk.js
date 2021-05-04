(this.webpackJsonpspellings=this.webpackJsonpspellings||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),s=a.n(l),c=(a(13),a(7)),i=a(1),u=a(2),o=a(4),m=a(3),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onWord(e.state.value.trim()),e.setState({value:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"ui large input"},r.a.createElement("input",{type:"text",placeholder:"Enter a word",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}))," ",r.a.createElement("button",{className:"ui large button primary",type:"submit",disabled:!this.state.value},"Add")))}}]),a}(r.a.Component),d=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={value:"",result:0},e.handleSubmit=function(t){t.preventDefault(),e.state.value.toUpperCase().trim()!==e.props.word.toUpperCase()?e.setState({result:-1,value:""}):e.setState({result:1,value:""})},e.handleSay=function(){window.speechSynthesis.speak(new SpeechSynthesisUtterance(e.props.word))},e.renderResult=function(){switch(e.state.result){case-1:return r.a.createElement("label",{className:"ui large label red"},r.a.createElement("i",{className:"ui large icon times circle"})," TRY AGAIN");case 1:return r.a.createElement("label",{className:"ui large label green",title:e.props.word.toUpperCase()},r.a.createElement("i",{className:"ui large icon check circle"})," CORRECT");default:return r.a.createElement(r.a.Fragment,null)}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",{key:this.props.word},r.a.createElement("td",{style:{fontWeight:"bold"}},"Word ",this.props.index+1,"."),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.handleSay,className:"ui button"},r.a.createElement("i",{className:"ui icon play"})," Say")),r.a.createElement("td",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"ui input"},r.a.createElement("input",{type:"text",spellCheck:!1,value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}))," ",r.a.createElement("button",{type:"submit",className:"ui button primary"},r.a.createElement("i",{className:"ui icon pencil"})," Spell"))),r.a.createElement("td",null,this.renderResult()),r.a.createElement("td",null,r.a.createElement("button",{className:"ui button red",onClick:this.props.onDelete},r.a.createElement("i",{className:"ui icon trash"})," Delete")))}}]),a}(r.a.Component),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("table",{className:"ui table"},r.a.createElement("tbody",null,this.props.words.map((function(t,a){return r.a.createElement(d,{key:t,word:t,index:a,onDelete:e.props.onDelete.bind(null,a)})}))))}}]),a}(r.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={words:[]},e.handleAddWord=function(t){e.setState({words:[].concat(Object(c.a)(e.state.words),[t])})},e.handleDelete=function(t){e.setState({words:e.state.words.filter((function(e,a){return a!==t}))})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:40,marginLeft:40,marginRight:40}},r.a.createElement("h1",null,"Awesome spelling app"),r.a.createElement(p,{onWord:this.handleAddWord}),r.a.createElement(h,{words:this.state.words,onDelete:this.handleDelete}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a182173f.chunk.js.map