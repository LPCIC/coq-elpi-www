'use strict';(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],f):f(CodeMirror)})(function(f){f.defineMode("smarty",function(t,l){function d(a,b){m=b;return a}function h(a,b){for(var c,d=a.string,f=a.pos;;){c=d.indexOf(g,f);var f=c+g.length,e;(e=-1==c)||(e=c+g.length,null==e&&(e=a.pos),e=!(3===p&&"{"==g&&(e==a.string.length||/\s/.test(a.string.charAt(e)))));if(e)break}if(c==a.pos){a.match(g);
if(a.eat("*"))return c=u("comment","*"+n),b.tokenize=c,c(a,b);b.depth++;b.tokenize=q;m="startTag";return"tag"}-1<c&&(a.string=d.slice(0,c));b=k.token(a,b.base);-1<c&&(a.string=d);return b}function q(a,b){if(a.match(n,!0))return 3===p?(b.depth--,0>=b.depth&&(b.tokenize=h)):b.tokenize=h,d("tag",null);if(a.match(g,!0))return b.depth++,d("tag","startTag");var c=a.next();if("$"==c)return a.eatWhile(e.validIdentifier),d("variable-2","variable");if("|"==c)return d("operator","pipe");if("."==c)return d("operator",
"property");if(e.stringChar.test(c))return b.tokenize=v(c),d("string","string");if(e.operatorChars.test(c))return a.eatWhile(e.operatorChars),d("operator","operator");if("["==c||"]"==c)return d("bracket","bracket");if("("==c||")"==c)return d("bracket","operator");if(/\d/.test(c))return a.eatWhile(/\d/),d("number","number");if("variable"==b.last){if("@"==c)return a.eatWhile(e.validIdentifier),d("property","property");if("|"==c)return a.eatWhile(e.validIdentifier),d("qualifier","modifier")}else{if("pipe"==
b.last)return a.eatWhile(e.validIdentifier),d("qualifier","modifier");if("whitespace"==b.last)return a.eatWhile(e.validIdentifier),d("attribute","modifier")}if("property"==b.last)return a.eatWhile(e.validIdentifier),d("property",null);if(/\s/.test(c))return m="whitespace",null;b="";"/"!=c&&(b+=c);for(var f;f=a.eat(e.validIdentifier);)b+=f;a=0;for(f=r.length;a<f;a++)if(r[a]==b)return d("keyword","keyword");return/\s/.test(c)?null:d("tag","tag")}function v(a){return function(b,c){for(var d=null,e;!b.eol();){e=
b.peek();if(b.next()==a&&"\\"!==d){c.tokenize=q;break}d=e}return"string"}}function u(a,b){return function(c,d){for(;!c.eol();){if(c.match(b)){d.tokenize=h;break}c.next()}return a}}var n=l.rightDelimiter||"}",g=l.leftDelimiter||"{",p=l.version||2,k=f.getMode(t,l.baseMode||"null"),r=["debug","extends","function","include","literal"],e={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/},m;return{startState:function(){return{base:f.startState(k),tokenize:h,last:null,depth:0}},
copyState:function(a){return{base:f.copyState(k,a.base),tokenize:a.tokenize,last:a.last,depth:a.depth}},innerMode:function(a){if(a.tokenize==h)return{mode:k,state:a.base}},token:function(a,b){a=b.tokenize(a,b);b.last=m;return a},indent:function(a,b){return a.tokenize==h&&k.indent?k.indent(a.base,b):f.Pass},blockCommentStart:g+"*",blockCommentEnd:"*"+n}});f.defineMIME("text/x-smarty","smarty")});
