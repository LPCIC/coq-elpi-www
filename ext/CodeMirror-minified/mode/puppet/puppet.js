'use strict';(function(c){"object"==typeof exports&&"object"==typeof module?c(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],c):c(CodeMirror)})(function(c){c.defineMode("puppet",function(){function c(a,b){b=b.split(" ");for(var e=0;e<b.length;e++)g[b[e]]=a}function k(a,b){for(var e,c,f=!1;!a.eol()&&(e=a.next())!=b.pending;){if("$"===e&&"\\"!=c&&'"'==b.pending){f=!0;break}c=e}f&&a.backUp(1);b.continueString=e==b.pending?!1:!0;return"string"}function h(a,
b){var c=a.match(/[\w]+/,!1),h=a.match(/(\s+)?\w+\s+=>.*/,!1),f=a.match(/(\s+)?[\w:_]+(\s+)?{/,!1),l=a.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),d=a.next();if("$"===d)return a.match(m)?b.continueString?"variable-2":"variable":"error";if(b.continueString)return a.backUp(1),k(a,b);if(b.inDefinition){if(a.match(/(\s+)?[\w:_]+(\s+)?/))return"def";a.match(/\s+{/);b.inDefinition=!1}if(b.inInclude)return a.match(/(\s+)?\S+(\s+)?/),b.inInclude=!1,"def";if(a.match(/(\s+)?\w+\(/))return a.backUp(1),"def";if(h)return a.match(/(\s+)?\w+/),
"tag";if(c&&g.hasOwnProperty(c))return a.backUp(1),a.match(/[\w]+/),a.match(/\s+\S+\s+{/,!1)&&(b.inDefinition=!0),"include"==c&&(b.inInclude=!0),g[c];if(/(^|\s+)[A-Z][\w:_]+/.test(c))return a.backUp(1),a.match(/(^|\s+)[A-Z][\w:_]+/),"def";if(f)return a.match(/(\s+)?[\w:_]+/),"def";if(l)return a.match(/(\s+)?[@]{1,2}/),"special";if("#"==d)return a.skipToEnd(),"comment";if("'"==d||'"'==d)return b.pending=d,k(a,b);if("{"==d||"}"==d)return"bracket";if("/"==d)return a.match(/.*?\//),"variable-3";if(d.match(/[0-9]/))return a.eatWhile(/[0-9]+/),
"number";if("="==d)return">"==a.peek()&&a.next(),"operator";a.eatWhile(/[\w-]/);return null}var g={},m=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;c("keyword","class define site node include import inherits");c("keyword","case if else in and elsif default or");c("atom","false true running present absent file directory undef");c("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");
return{startState:function(){return{inDefinition:!1,inInclude:!1,continueString:!1,pending:!1}},token:function(a,b){return a.eatSpace()?null:h(a,b)}}});c.defineMIME("text/x-puppet","puppet")});
