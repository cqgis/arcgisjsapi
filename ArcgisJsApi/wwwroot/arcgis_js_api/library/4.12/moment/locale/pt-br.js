//>>built
(function(a,b){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?b(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],b):b(a.moment)})(this,function(a){return a.defineLocale("pt-br",{months:"Janeiro Fevereiro Mar\u00e7o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),monthsShort:"Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),weekdays:"Domingo Segunda-feira Ter\u00e7a-feira Quarta-feira Quinta-feira Sexta-feira S\u00e1bado".split(" "),
weekdaysShort:"Dom Seg Ter Qua Qui Sex S\u00e1b".split(" "),weekdaysMin:"Do 2\u00aa 3\u00aa 4\u00aa 5\u00aa 6\u00aa S\u00e1".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\u00e0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\u00e0s] HH:mm"},calendar:{sameDay:"[Hoje \u00e0s] LT",nextDay:"[Amanh\u00e3 \u00e0s] LT",nextWeek:"dddd [\u00e0s] LT",lastDay:"[Ontem \u00e0s] LT",lastWeek:function(){return 0===this.day()||
6===this.day()?"[\u00daltimo] dddd [\u00e0s] LT":"[\u00daltima] dddd [\u00e0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\u00e1 %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\u00eas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\u00ba/,ordinal:"%d\u00ba"})});