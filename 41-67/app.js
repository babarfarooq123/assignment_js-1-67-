// chp 38-42
// 1
function power(a,b){
    var mul = 1
    for(var i=0 ; i<b ; i++){
        mul *= a
    }
    console.log(mul)
}
power(2,3)

// 2
var year = +prompt("Enter Year to Check Whether its Leap year or not ")
if(year%4 == 0){
    document.write(year + " is a Leap year <br />")
}else{
    document.write(year + " is not a Leap year <br />")
}

// 3
function calcS(a,b,c){
    return (a+b+c)/2
}

function calcA(a,b,c,s){
    return (s*((s-a)*(s-b)*(s-c)))
}

var a=2,b=4,c=5,s,area;
s = calcS(a,b,c)
area = calcA(a,b,c,s)
document.write("Area of Triange is = " + area.toFixed(3) + "<br />")

// 4
function average(s1,s2,s3){
    return (s1+s2+s3)/3
}

function percentage(s1,s2,s3){
    return ((s1+s2+s3)/300)*100
}

function mainfunction(s1,s2,s3){
    var avg = average(s1,s2,s3)
    var perc = percentage(s1,s2,s3)
    document.write("Average = " + avg.toFixed(3) + "<br />Percentage = " + perc.toFixed(3) + "<br /><br />")
}

mainfunction(100,90,60)

// 5
function indOf(str,ch){
    for(var i=0 ; i<str.length ; i++){
        if(str[i] == ch){
            document.write("In String '"+str+"' the Character "+ch+" is at index "+i+"<br /><br/>")
        }
    }
}

indOf('helloworld','w')

// 6
function remVowels(sent){
    var str = ''
    for(var i=0 ; i<sent.length ; i++){
        if(sent[i]!='a'&&sent[i]!='e'&&sent[i]!='i'&&sent[i]!='o'&&sent[i]!='u'){
            str += sent[i]
        }
    }
    console.log("Sentence after removal of Vowels = " + str + "<br /><br />")
}

// 7
function occurences(sentence){
    for(var i=0 ; i<sentence.length-1 ; i++){
        if(sentence[i]=='a'||sentence[i]=='e'||sentence[i]=='i'||sentence[i]=='o'||sentence[i]=='u'){
            switch(sentence[i+1]){
                case 'a':
                    console.log(sentence[i] + sentence[i+1] +" ")
                    break
                case 'e':
                    console.log(sentence[i] + sentence[i+1] +" ")
                    break
                case 'i':
                    console.log(sentence[i] + sentence[i+1] +" ")
                    break
                case 'o':
                    console.log(sentence[i] + sentence[i+1] +" ")
                    break
                case 'u':
                    console.log(sentence[i] + sentence[i+1] +" ")
                    break
            }
        }else{
            continue
        }
    }
}

var sentence = "Pleases read this application and give me gratuity"
occurences(sentence)

// 8
var distKm = +prompt("Enter distance between Two cities")
var distM = distKm*1000
var distfeet = distM*3.28084
var distinch = distfeet*12
var distcenti = distinch*2.54

document.write("<br /> "+distKm+" kilometer in meter = "+distM+"<br />")
document.write("<br /> "+distKm+" kilometer in feet = "+distfeet+"<br />")
document.write("<br /> "+distKm+" kilometer in inches = "+distinch.toFixed(3)+"<br />")
document.write("<br /> "+distKm+" kilometer in centimers = "+distcenti.toFixed(3)+"<br />")

// 9
function overtime(hoursWorked){
    if(hoursWorked>40){
        var _overtime = hoursWorked-40
        return _overtime*12
    }
}
document.write("<br />Hours Worked = 55 Money get due to Overtime = "+overtime(55)+"<br />")

// 10
var cash = +prompt("Enter Amount to Withdraw")
var fif = 0,ten = 0,hund = 0
var fiften = Math.floor(cash%100)
if(fiften >= 50){
    fif++
}
if(fiften < 50){
    if(fiften<20){
        ten++
    }else if(fiften<30){
        ten+=2
    }else if(fiften<40){
        ten+=3
    }else{
        ten+=4
    }
}
if(fiften<70&&fiften>50){
    ten+=1
}else if(fiften<80&&fiften>50){
    ten+=2
}else if(fiften<90&&fiften>50){
    ten+=3
}else if(fiften<100&&fiften>50){
    ten+=4
}

var h = cash/100
document.write("<br /><strong>You willl have "+Math.floor(h)+" hundred notes "+fif+" fifty notes and "+ten+" ten notes</strong><br/>")


// cha 43-48
// 3
function del(id){
    var rem = document.getElementById(id)
    console.log(rem)
    rem.remove();
    for(var i=Number(id) ; i<=9 ; i++){
        document.getElementById((i+1).toString()).childNodes[1].innerHTML = i.toString();
        document.getElementById((i+1).toString()).setAttribute('id',i.toString());
    }
}

// 4
function musover(id){
    document.getElementById(id).setAttribute('src', './tree2.jpg')
}
function musout(id){
    document.getElementById(id).setAttribute('src', './tree1.webp')
}

// 5
function incdec(val){
    if(val>0){
        document.getElementById('count').innerHTML = Number(document.getElementById('count').innerHTML)+1 
    }else{
        document.getElementById('count').innerHTML = Number(document.getElementById('count').innerHTML)-1 
    }
}


// cha 49-52
// 1
document.getElementById('prevent').addEventListener('click',function(e){
    e.preventDefault()
    document.write("<h2>"+ document.getElementById('name').value +"</h2>")
    document.write("<h2>"+ document.getElementById('password').value+"</h2>")
})
function formsubmit(e){
}

// 2
function seemore(){
    var semo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos dicta nostrum quo id saepe et dolores iste animi expedita quidem iusto libero officiis, veritatis, praesentium deleniti labore, accusamus cumque."
    document.getElementById('see').innerHTML = semo+"<br><br>";
}

// 3
function dell(id){
    var rem = document.getElementById(id)
    console.log(rem)
    rem.remove();
    // console.log(document.getElementsByTagName('table')[1].getElementsByTagName('tr'))
    // for(var i=Number(id) ; i<=19 ; i++){
    //     document.getElementById((i+1).toString()).childNodes[1].innerHTML = i.toString();
    //     document.getElementById((i+1).toString()).setAttribute('id',i.toString());
    // }
}
function addToTable(){
    var t1 = document.getElementById('inp1').value
    var t2 = document.getElementById('inp2').value
    var t3 = document.getElementById('inp3').value

    var a = document.getElementsByTagName('table')[1]

    var trr = document.createElement('tr')
    trr.setAttribute('id',''+t1+'')

    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')

    var btn1 =document.createElement('button')
    var textnode1 = document.createTextNode(t1)
    var textnode2 = document.createTextNode(t2)
    var textnode3 = document.createTextNode(t3)
    var textnode4 = document.createTextNode('Delete')

    td1.appendChild(textnode1)
    td2.appendChild(textnode2)
    td3.appendChild(textnode3)
    btn1.appendChild(textnode4)
    btn1.setAttribute('onclick', 'dell('+t1+')')
    trr.appendChild(td1)
    trr.appendChild(td2)
    trr.appendChild(td3)
    trr.appendChild(btn1)

    a.appendChild(trr)
}

// cha 58-67
// 1(i)
var main = document.getElementById('main-content')
// 1(ii)
var l = main.childNodes
for(var i=1 ; i<l.length ; i+=2){
    document.write(l[i].innerHTML+" <br>")
}
// 1(iii)
var render = document.querySelectorAll('.render')
console.log(render[0])
for(var i=0 ; i<render.length ; i+=1){
    document.write(render[i].innerHTML+" <br>")
}
// 1(iv)
document.getElementById('first-name').value = 'Babar'
document.getElementById('last-name').value = 'Farooq'
document.getElementById('email').value = 'babarfarooq99@gmail.com'

// 2(i)
document.write("<br/><br/>"+document.getElementById('form-content').nodeType)
// 2(ii)
document.write("<br/><br/>NodeTYPE = "+document.getElementById('lastName').nodeType+" ChildNode = "+document.getElementById('lastName').childNodes[0].textContent)
// 2(iii)
document.getElementById('lastName').textContent = "Aizaz"
document.write("<br/><br/>After updation of text = "+document.getElementById('lastName').textContent)
// 2(iv)
document.write("<br/>First Child"+document.getElementById('main-content').firstChild.textContent+" Last Child "+document.getElementById('main-content').lastChild.textContent)
// 2(v)
var preSibling = document.getElementById('lastName').previousSibling.textContent
var nexSibling = document.getElementById('lastName').nextSibling.textContent
document.write("<br/><br/>Previous Sibling "+preSibling+" Next Sibling "+nexSibling)
// 2(vi)
var n = document.getElementById('email').parentElement
var ntype  = document.getElementById('email').nodeType
document.write("<br/>Parent Node: "+n)
document.write("<br/>Node Type: "+ntype)