(this.webpackJsonpreact_admin_template=this.webpackJsonpreact_admin_template||[]).push([[8],{1324:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(474);e.default=function(){return a.a.createElement("div",{className:"app-container"},a.a.createElement(o.a,{title:"\u7ba1\u7406\u5458\u9875\u9762",source:"\u8fd9\u4e2a\u9875\u9762\u53ea\u6709admin\u89d2\u8272\u624d\u53ef\u4ee5\u8bbf\u95ee\uff0cguest\u89d2\u8272\u770b\u4e0d\u5230"}))}},474:function(t,e,n){"use strict";n(490);var i=n(489),a=n(39),o=n(40),s=n(42),r=n(41),u=n(0),c=n.n(u),l=function(){function t(e){Object(a.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(o.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var n=Array.from(t.childNodes),i=0;i<n.length;i++){var a=n[i];if(3===a.nodeType)e=e.concat(a.nodeValue.split(""));else if(1===a.nodeType){var o=[];o=this.convert(a,o),e.push({dom:a,val:o})}}return e}},{key:"print",value:function(t,e,n){setTimeout((function(){t.appendChild(document.createTextNode(e)),n()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var n=t.val.shift();if("string"===typeof n)this.print(t.dom,n,(function(){e.play(t)}));else{var i=n.dom.cloneNode();t.dom.appendChild(i),this.play({parent:t,dom:i,val:n.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),p=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){new l({source:this.source,output:this.output,delay:30}).start()}},{key:"render",value:function(){var t=this;return c.a.createElement(i.a,{hoverable:!0,bordered:!1,className:"card-item",title:this.props.title,style:{minHeight:this.props.height},id:this.props.id},c.a.createElement("div",{style:{display:"none"},ref:function(e){return t.source=e},dangerouslySetInnerHTML:{__html:this.props.source}}),c.a.createElement("div",{ref:function(e){return t.output=e}}))}}]),n}(c.a.Component);p.defaultProps={title:"\u4f55\u65f6\u4f7f\u7528",source:"",height:136};e.a=p}}]);