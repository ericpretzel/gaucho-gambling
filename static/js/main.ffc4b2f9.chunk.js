(this["webpackJsonpgaucho-gambling"]=this["webpackJsonpgaucho-gambling"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var s=a(1),i=a.n(s),c=a(9),n=a.n(c),r=(a(14),a(2)),d=a(3),l=a(5),p=a(4),u=a.p+"static/media/1B.eb0ed9a0.svg",o=a.p+"static/media/AH.f862fe04.svg",b=a.p+"static/media/AD.1ce2b4c2.svg",m=a.p+"static/media/AC.a7647706.svg",g=a.p+"static/media/AS.82b68d67.svg",h=a.p+"static/media/2H.c6c5ee8f.svg",v=a.p+"static/media/2D.a812b0d2.svg",f=a.p+"static/media/2C.ae60ecf2.svg",j=a.p+"static/media/2S.2b7715b8.svg",S=a.p+"static/media/3H.bb9c04b0.svg",H=a.p+"static/media/3D.df622bb3.svg",D=a.p+"static/media/3C.eed5fbc3.svg",O=a.p+"static/media/3S.71ce93b8.svg",y=a.p+"static/media/4H.f4d12e87.svg",C=a.p+"static/media/4D.737f2b02.svg",T=a.p+"static/media/4C.43133ee6.svg",k=a.p+"static/media/4S.558c63fd.svg",x=a.p+"static/media/5H.f3fdba2c.svg",A=a.p+"static/media/5D.3b9c4804.svg",N=a.p+"static/media/5C.c6052edf.svg",E=a.p+"static/media/5S.af43f069.svg",J=a.p+"static/media/6H.7579a0f3.svg",I=a.p+"static/media/6D.d62fa590.svg",M=a.p+"static/media/6C.aab41476.svg",B=a.p+"static/media/6S.65b923ce.svg",K=a.p+"static/media/7H.bfed1f57.svg",Q=a.p+"static/media/7D.f1852b8c.svg",R=a.p+"static/media/7C.52ed2d88.svg",w=a.p+"static/media/7S.12319d75.svg",P=a.p+"static/media/8H.ecac5b4f.svg",F=a.p+"static/media/8D.fcb93e61.svg",G=a.p+"static/media/8C.6ce46ec1.svg",W=a.p+"static/media/8S.3cc26024.svg",_=a.p+"static/media/9H.43b7197a.svg",Y=a.p+"static/media/9D.8a7943da.svg",$=a.p+"static/media/9C.b915d77b.svg",q=a.p+"static/media/9S.d8b09904.svg",z=a.p+"static/media/TH.f2a8fc48.svg",L=a.p+"static/media/TD.b84b99c6.svg",U=a.p+"static/media/TC.41bd4461.svg",V=a.p+"static/media/TS.374962ff.svg",X=a.p+"static/media/JH.51714864.svg",Z=a.p+"static/media/JD.7a9a4794.svg",tt=a.p+"static/media/JC.8c1e02cb.svg",et=a.p+"static/media/JS.9d549317.svg",at=a.p+"static/media/QH.94af09f7.svg",st=a.p+"static/media/QD.3e8dedb3.svg",it=a.p+"static/media/QC.b54fdf20.svg",ct=a.p+"static/media/QS.b318d6aa.svg",nt=a.p+"static/media/KH.d6dc6061.svg",rt=a.p+"static/media/KD.4669b784.svg",dt=a.p+"static/media/KC.b89fa805.svg",lt=a.p+"static/media/KS.aa59ba78.svg",pt=a(0),ut={AH:o,AD:b,AC:m,AS:g,"2H":h,"2D":v,"2C":f,"2S":j,"3H":S,"3D":H,"3C":D,"3S":O,"4H":y,"4D":C,"4C":T,"4S":k,"5H":x,"5D":A,"5C":N,"5S":E,"6H":J,"6D":I,"6C":M,"6S":B,"7H":K,"7D":Q,"7C":R,"7S":w,"8H":P,"8D":F,"8C":G,"8S":W,"9H":_,"9D":Y,"9C":$,"9S":q,TH:z,TD:L,TC:U,TS:V,JH:X,JD:Z,JC:tt,JS:et,QH:at,QD:st,QC:it,QS:ct,KH:nt,KD:rt,KC:dt,KS:lt},ot=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return this.props.isFaceup?Object(pt.jsx)("img",{width:137,height:187,src:ut[this.props.rank+this.props.suit],alt:u,className:"card"}):Object(pt.jsx)("img",{width:137,height:187,src:u,alt:u,className:"card"})}}]),a}(i.a.Component),bt=ot,mt=a(8),gt=mt.gameState,ht=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"label",value:function(){if(this.props.gameState!==gt.NOT_STARTED){var t=this.props.isDealer?"Dealer Hand: ":"Player Hand: ",e=this.props.isDealer&&this.props.gameState===gt.STARTED?this.props.cards.slice(0,-1):this.props.cards;return t+=mt.calculateTotal(mt.evaluateHand(e))}return null}},{key:"render",value:function(){var t=this;return Object(pt.jsxs)("div",{className:"hand",children:[Object(pt.jsx)("text",{children:this.label()}),Object(pt.jsx)("br",{}),this.props.cards.map((function(e,a){return Object(pt.jsx)(bt,{suit:e[1],rank:e[0],isFaceup:!t.props.isDealer||(a!==t.props.cards.length-1||t.props.gameState===gt.FINISHED)},a)}))]})}}]),a}(i.a.Component);ht.defaultProps={cards:[],isDealer:!1};var vt=ht,ft=a(6),jt=(a(16),function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={value:0},s.handleChange=s.handleChange.bind(Object(ft.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(ft.a)(s)),s}return Object(d.a)(a,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this.state.value;this.props.startGame(e),t.preventDefault()}},{key:"render",value:function(){return Object(pt.jsx)("div",{className:"bet-form",children:Object(pt.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(pt.jsx)("label",{id:"bet-label",children:"Bet: "}),Object(pt.jsx)("input",{className:"bet-field",type:"text",value:this.state.value,onChange:this.handleChange})," ",Object(pt.jsx)("br",{}),Object(pt.jsx)("input",{className:"bet-submit",type:"submit",disabled:this.props.disabled,value:"Place Bet"})]})})}}]),a}(i.a.Component)),St=jt,Ht=(a(17),a(8)),Dt=Ht.gameState,Ot=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).startGame=function(t){if(t=parseInt(t),isNaN(t)||t<=0||t>s.state.playerMoney)return alert("Invalid Bet!");var e=Ht.getDeck(),a=[],i=[],c=e.shift(),n=e.shift();a.push(c),a.push(n);var r=e.shift();i.push(r),s.setState((function(s,c){return{deck:e,dealerHand:a,playerHand:i,playerBet:t,playerMoney:s.playerMoney-t,gameState:Dt.STARTED,message:"Good luck!"}})),console.log("game started")},s.hit=function(){var t=s.state.deck,e=s.state.playerHand,a=t.shift();e.push(a);var i=Ht.calculateTotal(Ht.evaluateHand(s.state.playerHand));return i>21&&(console.log("busted"),s.stand(i)),21===i&&(console.log("blackjack"),s.stand(i)),s.setState({deck:t,playerHand:e}),console.log("hit complete")},s.split=function(){return console.log("split")},s.stand=function(t){var e=s.state.dealerHand,a=s.state.deck;if(t<=21)for(;Ht.calculateTotal(Ht.evaluateHand(e))<17;){var i=a.shift();e.push(i)}var c=Ht.calculateTotal(Ht.evaluateHand(e));console.log("dealerScore = ",c);var n=Ht.getWinner(t,c);console.log("isWinner = ",n);var r=0,d="";switch(n){case!0:21===t?(d="Blackjack!",r=2.5):(d="You win!",r=2);break;case null:d="Push!",r=1;break;default:d=t>21?"Bust!":"You lost!",r=0}s.setState((function(t,e){return{gameState:Dt.FINISHED,playerMoney:t.playerMoney+t.playerBet*r,message:d+" Play again?"}}))},s.state={deck:Ht.getDeck(),playerMoney:100,playerBet:0,dealerHand:[],playerHand:[],gameState:Dt.NOT_STARTED,message:"Place a bet to start!"},s}return Object(d.a)(a,[{key:"render",value:function(){var t=this,e=Object(pt.jsx)("button",{onClick:this.hit,disabled:this.state.gameState!==Dt.STARTED,children:Object(pt.jsx)("span",{children:"Hit"})}),a=Object(pt.jsx)("button",{onClick:function(){return t.stand(Ht.calculateTotal(Ht.evaluateHand(t.state.playerHand)))},disabled:this.state.gameState!==Dt.STARTED,children:Object(pt.jsx)("span",{children:"Stand"})}),s=Object(pt.jsx)(vt,{className:"playerHand",cards:this.state.playerHand,isDealer:!1,gameState:this.state.gameState}),i=Object(pt.jsx)(vt,{className:"dealerHand",cards:this.state.dealerHand,isDealer:!0,gameState:this.state.gameState}),c=Object(pt.jsx)(St,{disabled:this.state.gameState===Dt.STARTED,startGame:this.startGame});return Object(pt.jsxs)("div",{className:"App",children:[Object(pt.jsxs)("div",{className:"center",children:["Money: $"+this.state.playerMoney," ",Object(pt.jsx)("br",{}),this.state.message]}),c,e,a,Object(pt.jsxs)("div",{className:"card-center",children:[i," ",Object(pt.jsx)("br",{}),s]})]})}}]),a}(i.a.Component),yt=Ot;n.a.render(Object(pt.jsx)(i.a.StrictMode,{children:Object(pt.jsx)(yt,{})}),document.getElementById("root"))},8:function(t,e){e.gameState={NOT_STARTED:0,STARTED:1,FINISHED:2},e.getDeck=function(){var t=[],a=["D","H","C","S"];return["A","2","3","4","5","6","7","8","9","T","J","Q","K"].forEach((function(e){a.forEach((function(a){t.push(e+a)}))})),t=e.shuffleArray(t)},e.shuffleArray=function(t){for(var e,a=[],s=t.length;s;)(e=Math.floor(Math.random()*t.length))in t&&(a.push(t[e]),delete t[e],s--);return a},e.evaluateHand=function(t){var e=0,a=0;return t.forEach((function(t){"T"===t[0]||"J"===t[0]||"Q"===t[0]||"K"===t[0]?(e+=10,a+=10):"A"===t[0]?(e+=1,a+=a+11>21?1:11):(e+=parseInt(t[0]),a+=parseInt(t[0]))})),[e,a]},e.calculateTotal=function(t){return 21===t[0]||21===t[1]?21:t[1]>21?t[0]:t[1]},e.getWinner=function(t,e){switch(!0){case t===e:case t>21&&e>21:return null;case t>21:case e>t&&e<=21:return!1;default:return!0}}}},[[18,1,2]]]);
//# sourceMappingURL=main.ffc4b2f9.chunk.js.map