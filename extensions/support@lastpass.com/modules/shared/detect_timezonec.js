function calculate_time_zone(b){var a=new Date,c=new Date(a.getFullYear(),0,1,0,0,0,0),a=new Date(a.getFullYear(),6,1,0,0,0,0),d=c.toGMTString(),e=new Date(d.substring(0,d.lastIndexOf(" ")-1)),d=a.toGMTString(),d=new Date(d.substring(0,d.lastIndexOf(" ")-1)),c=(c-e)/36E5,a=(a-d)/36E5;c==a?a="0":(0<=c-a&&(c=a),a="1");if(null==b)for(b=0;b<document.getElementById("timezone").options.length;b++)if(document.getElementById("timezone").options[b].value==convert(c)+","+a){document.getElementById("timezone").selectedIndex=
b;break}return convert(c)+","+a}function convert(b){var a=parseInt(b);b-=parseInt(b);b*=60;var c=Math.abs(parseInt(b));b-=parseInt(b);parseInt(60*b);b=a;b=0==a?"0"+a:10>a&&0<a?"+0"+a:"+"+a;b=0>a&&-10<a?"-0"+Math.abs(a):b;return b+":"+(10>c?"0"+c:c)};