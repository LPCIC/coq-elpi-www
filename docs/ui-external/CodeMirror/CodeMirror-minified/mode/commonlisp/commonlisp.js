'use strict';(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("commonlisp",function(e){function f(a){for(var b;b=a.next();)if("\\"==b)a.next();else if(!k.test(b)){a.backUp(1);break}return a.current()}function g(a,b){if(a.eatSpace())return d="ws",null;if(a.match(l))return"number";var c=a.next();"\\"==c&&(c=a.next());if('"'==c)return(b.tokenize=
m)(a,b);if("("==c)return d="open","bracket";if(")"==c||"]"==c)return d="close","bracket";if(";"==c)return a.skipToEnd(),d="ws","comment";if(/['`,@]/.test(c))return null;if("|"==c){if(a.skipTo("|"))return a.next(),"symbol";a.skipToEnd();return"error"}if("#"==c)return c=a.next(),"("==c?(d="open","bracket"):/[+\-=\.']/.test(c)||/\d/.test(c)&&a.match(/^\d*#/)?null:"|"==c?(b.tokenize=n)(a,b):":"==c?(f(a),"meta"):"\\"==c?(a.next(),f(a),"string-2"):"error";a=f(a);if("."==a)return null;d="symbol";return"nil"==
a||"t"==a||":"==a.charAt(0)?"atom":"open"==b.lastType&&(p.test(a)||h.test(a))?"keyword":"&"==a.charAt(0)?"variable-2":"variable"}function m(a,b){for(var c=!1,d;d=a.next();){if('"'==d&&!c){b.tokenize=g;break}c=!c&&"\\"==d}return"string"}function n(a,b){for(var c,e;c=a.next();){if("#"==c&&"|"==e){b.tokenize=g;break}e=c}d="ws";return"comment"}var p=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,
h=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,l=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,k=/[^\s'`,@()\[\]";]/,d;return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:g}},token:function(a,b){a.sol()&&"number"!=typeof b.ctx.indentTo&&(b.ctx.indentTo=b.ctx.start+1);d=null;var c=b.tokenize(a,b);"ws"!=d&&(null==b.ctx.indentTo?"symbol"==d&&h.test(a.current())?b.ctx.indentTo=
b.ctx.start+e.indentUnit:b.ctx.indentTo="next":"next"==b.ctx.indentTo&&(b.ctx.indentTo=a.column()),b.lastType=d);"open"==d?b.ctx={prev:b.ctx,start:a.column(),indentTo:null}:"close"==d&&(b.ctx=b.ctx.prev||b.ctx);return c},indent:function(a,b){b=a.ctx.indentTo;return"number"==typeof b?b:a.ctx.start+1},closeBrackets:{pairs:'()[]{}""'},lineComment:";;",blockCommentStart:"#|",blockCommentEnd:"|#"}});e.defineMIME("text/x-common-lisp","commonlisp")});
