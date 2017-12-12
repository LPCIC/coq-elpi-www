'use strict';(function(h){"object"==typeof exports&&"object"==typeof module?h(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],h):h(CodeMirror)})(function(h){function p(c,a,b){for(var e,d=b.paragraphStart||c.getHelper(a,"paragraphStart"),f=a.line,k=c.firstLine();f>k;--f){e=c.getLine(f);if(d&&d.test(e))break;if(!/\S/.test(e)){++f;break}}b=b.paragraphEnd||c.getHelper(a,"paragraphEnd");a=a.line+1;for(d=c.lastLine();a<=d;++a){e=c.getLine(a);if(b&&
b.test(e)){++a;break}if(!/\S/.test(e))break}return{from:f,to:a}}function v(c,a,b,e){for(var d=a;d<c.length&&" "==c.charAt(d);)d++;for(;0<d&&!b.test(c.slice(d-1,d+1));--d);for(b=!0;;b=!1){var f=d;if(e)for(;" "==c.charAt(f-1);)--f;if(0==f&&b)d=a;else return{from:f,to:d}}}function n(c,a,b,e){a=c.clipPos(a);b=c.clipPos(b);var d=e.column||80,f=e.wrapOn||/\s\S|-[^\.\d]/;e=!1!==e.killTrailingSpace;var k=[],g="",q=a.line;a=c.getRange(a,b,!1);if(!a.length)return null;b=a[0].match(/^[ \t]*/)[0];for(var r=0;r<
a.length;++r){var l=a[r],n=g.length,p=0;g&&l&&!f.test(g.charAt(g.length-1)+l.charAt(0))&&(g+=" ",p=1);var t="";r&&(t=l.match(/^\s*/)[0],l=l.slice(t.length));g+=l;if(r){var u=g.length>d&&b==t&&v(g,d,f,e);u&&u.from==n&&u.to==n+p?(g=b+l,++q):k.push({text:[p?" ":""],from:m(q,n),to:m(q+1,t.length)})}for(;g.length>d;)l=v(g,d,f,e),k.push({text:["",b],from:m(q,l.from),to:m(q,l.to)}),g=b+g.slice(l.to),++q}k.length&&c.operation(function(){for(var b=0;b<k.length;++b){var a=k[b];(a.text||h.cmpPos(a.from,a.to))&&
c.replaceRange(a.text,a.from,a.to)}});return k.length?{from:k[0].from,to:h.changeEnd(k[k.length-1])}:null}var m=h.Pos;h.defineExtension("wrapParagraph",function(c,a){a=a||{};c||(c=this.getCursor());c=p(this,c,a);return n(this,m(c.from,0),m(c.to-1),a)});h.commands.wrapLines=function(c){c.operation(function(){for(var a,b,e=c.listSelections(),d=c.lastLine()+1,f=e.length-1;0<=f;f--)b=e[f],b.empty()?(b=p(c,b.head,{}),a=m(b.from,0),b=m(b.to-1)):(a=b.from(),b=b.to()),b.line>=d||(d=a.line,n(c,a,b,{}))})};
h.defineExtension("wrapRange",function(c,a,b){return n(this,c,a,b||{})});h.defineExtension("wrapParagraphsInRange",function(c,a,b){b=b||{};var e=this,d=[];for(c=c.line;c<=a.line;)c=p(e,m(c,0),b),d.push(c),c=c.to;var f=!1;d.length&&e.operation(function(){for(var a=d.length-1;0<=a;--a)f=f||n(e,m(d[a].from,0),m(d[a].to-1),b)});return f})});
