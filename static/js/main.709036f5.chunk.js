(this["webpackJsonplog-in"]=this["webpackJsonplog-in"]||[]).push([[0],{12:function(e,s,a){},17:function(e,s,a){},18:function(e,s,a){"use strict";a.r(s);var d=a(2),r=a.n(d),i=a(5),t=a.n(i),n=(a(12),a(3)),c=a(1),m=a(0);var o=function(e){var s=e.Login,a=e.error,r=Object(d.useState)({name:"",email:"",password:""}),i=Object(n.a)(r,2),t=i[0],o=i[1];return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),s(t)},children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Login"}),""!=a?Object(m.jsx)("div",{className:"error",children:a}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return o(Object(c.a)(Object(c.a)({},t),{},{name:e.target.value}))},value:t.Name})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email ID:"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return o(Object(c.a)(Object(c.a)({},t),{},{email:e.target.value}))},value:t.EMail})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return o(Object(c.a)(Object(c.a)({},t),{},{password:e.target.value}))},value:t.Password})]}),Object(m.jsx)("input",{type:"submit",value:"login"})]})})},f=a(6),u=a(7),j=[{Header:"Name",accessor:"first_name"},{Header:"Address",accessor:"address"},{Header:"UserID",accessor:"id"}],b=(a(17),function(){var e=Object(d.useMemo)((function(){return j}),[]),s=Object(d.useMemo)((function(){return u}),[]),a=Object(f.useTable)({columns:e,data:s}),r=a.getTableProps,i=a.getTableBodyProps,t=a.headerGroups,n=a.rows,o=a.prepareRow;return Object(m.jsxs)("table",Object(c.a)(Object(c.a)({},r),{},{children:[Object(m.jsx)("thead",{children:t.map((function(e){return Object(m.jsx)("tr",Object(c.a)(Object(c.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(m.jsx)("th",Object(c.a)(Object(c.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(m.jsx)("tbody",Object(c.a)(Object(c.a)({},i()),{},{children:n.map((function(e){return o(e),Object(m.jsx)("tr",Object(c.a)(Object(c.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(m.jsx)("td",Object(c.a)(Object(c.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))});var l=function(){var e="admin@admin.com",s="password",a=Object(d.useState)({name:"",email:""}),r=Object(n.a)(a,2),i=r[0],t=r[1],c=Object(d.useState)(""),f=Object(n.a)(c,2),u=f[0],j=f[1],l=function(){t({name:"",email:""}),console.log("Logged out")};return Object(m.jsx)("div",{className:"App",children:""!=i.email?Object(m.jsxs)("div",{className:"Welcome",children:[Object(m.jsxs)("h2",{children:["Welcome, ",Object(m.jsx)("span",{children:i.name})]}),Object(m.jsx)("hr",{}),Object(m.jsx)(b,{user:i,Logout:l}),Object(m.jsx)("button",{className:"button",onClick:l,children:"Logout"})]}):Object(m.jsx)(o,{Login:function(a){console.log(a),a.email==e&&a.password==s?(console.log("Logged in"),t({name:a.name,email:a.email})):(console.log("Details do not match"),j("Details do not match"))},error:u})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(s){var a=s.getCLS,d=s.getFID,r=s.getFCP,i=s.getLCP,t=s.getTTFB;a(e),d(e),r(e),i(e),t(e)}))};t.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(l,{})}),document.getElementById("root")),h()},7:function(e){e.exports=JSON.parse('[{"first_name":"Mathilda","address":"19jZBbq9QqvjHDDXdBAMDJ8vDMmxTrUeZR","id":1},{"first_name":"Laurent","address":"1Q32F8NAk1bu175XZpPYS3tyxv3bXcsrwS","id":2},{"first_name":"Nathalie","address":"1KQUTbqBjSUfYt8MpNXy6qJ2rn5agU2VyB","id":3},{"first_name":"Pen","address":"1Joq96GqCppNtmZe4xHbWhtLcxyEeD7rKA","id":4},{"first_name":"Valaree","address":"14QDmgebYja3QU51669AtEVMMAzt3QjeoY","id":5},{"first_name":"Cassius","address":"1Cys1zwLBSUL9yBohKntRu9qUcF2zDZ4ua","id":6},{"first_name":"Emelda","address":"12z7tTJAhHXywWGHe7JQXfoMGyJWBzt7tq","id":7},{"first_name":"Elisa","address":"1C3BS22SUtsudQ6naFjHx3wwPGgh1u7tfH","id":8},{"first_name":"Buddy","address":"1mTc1ep5XEKEkqLSQ3cyjeaqwdZMrz3x2","id":9},{"first_name":"Emmalynne","address":"1GLyJXxaBn5Qstq1C8evVhioh69ckq8qab","id":10},{"first_name":"Minor","address":"1Jaa3L3a5ZFCFrj1wSWruLnZuEj24wLCoe","id":11},{"first_name":"Cchaddie","address":"179gUo3aE5kGNHSUF1J9EGNJw7gr3eLxYe","id":12},{"first_name":"Odette","address":"1GweFFHKJagUmoCS6w2xENhRNTKbacFWbP","id":13},{"first_name":"Codi","address":"1KkCV9oHZBGcTqyLfkf28QUiyQ9runUrzL","id":14},{"first_name":"Lalo","address":"1GDDpWwnyMY6ZqRQmvsYR6GiX4fhqFZE78","id":15},{"first_name":"Elston","address":"17ByhdX1h6wFVGRSKHgycWRPGE4hQvMZpk","id":16},{"first_name":"Zabrina","address":"1PTXR9TnQpt1ieg9Eb5ZsnzZFFceXkECxR","id":17},{"first_name":"Perkin","address":"1DAypStPLDn3hijA3o5ofBAAzcJTsEwL1P","id":18},{"first_name":"Marget","address":"13kzUn5BwRVuJuoC7zPFZXNrAR5gLW3jfL","id":19},{"first_name":"Alice","address":"1MaecThMxoVFWsCJ1N2qVaJQLeW46skibj","id":20},{"first_name":"Briano","address":"15C6qjQF14X5nYudKq2BX5925WYW2NtyPS","id":21},{"first_name":"Les","address":"1CPTzyFov5SXhUb6AGL6aMQgGh7DExSres","id":22},{"first_name":"Gennifer","address":"13SV5MupuQCPrdGxKMaoYXKrT7VJWjWwAC","id":23},{"first_name":"Janis","address":"1Cnx9dAuiHfAMetagKzrwyukj3Mjsb5Nsw","id":24},{"first_name":"Artus","address":"186Eeqbcsf7gBXzCfZxvq2uxEpzdB5F9kq","id":25},{"first_name":"Janaya","address":"1KCwh74Zo9sNc6MMGM8xU5odK668fWEoF6","id":26},{"first_name":"Leslie","address":"1KtbccKBRmuq93DQuBtT54p3Je2qXxCZPq","id":27},{"first_name":"Britney","address":"13B8CRrmeVYagfnaXsEbAt3ZPWBGDGyMiZ","id":28},{"first_name":"Cindie","address":"18buETMQvoW3vH5B22LxkzBBLeVoFyxdC2","id":29},{"first_name":"Brendon","address":"1Am6BcwPZwFqA57Yvdp9AV1gC2gkFhXyaf","id":30},{"first_name":"Innis","address":"1KH69ka2gBhNLETXUTokj5F9zSnjY57kjA","id":31},{"first_name":"Nessa","address":"1N3xDr91gRx6EJbrakikSjKP32L3C83i4T","id":32},{"first_name":"Meier","address":"1EDBaxDGE99FCZGWDur9aqciGnYZNye6g4","id":33},{"first_name":"Lammond","address":"12sj8V8439RzF4sPVpRT4iqSVoWDv74kan","id":34},{"first_name":"Maximilian","address":"1GGVJhVc4ziv2ASMUnHxNKDewgTk4LUpn8","id":35},{"first_name":"Burt","address":"14YqaNtNgWL11LmZdiZ9npHTnLtTLBNfU1","id":36},{"first_name":"Theresita","address":"17GSqzsZCNFcwkMNcdAF3rMfDmxnmwsy6j","id":37},{"first_name":"Debera","address":"19yQyF9dsnmXxEPLB37YMRZ2z56aHD1R7E","id":38},{"first_name":"Allison","address":"1PxGkcASkXKQhUBcT7UWPxVdwX4UA8RDp9","id":39},{"first_name":"Judah","address":"12S87Kp3gPrtL32qhPDhUgsmpCuvQXfzY6","id":40},{"first_name":"York","address":"12kjA4ZTSubidUGc3r3H3fPzoSf21QnX75","id":41},{"first_name":"Zacharie","address":"1Ew7jW7Px8JdCQcuzv9omquXfBzQGdGuug","id":42},{"first_name":"Hulda","address":"16bJ78yrZzbQ18WhQnJP93nXUuUwj4zzWD","id":43},{"first_name":"Kacey","address":"1PinGFbLDiKSNXjikiSceZErmwG1S6dgtU","id":44},{"first_name":"Deirdre","address":"173MFr4FFUhiBKjs8HfLHJkCQj3T8GsLpt","id":45},{"first_name":"Erina","address":"1KsDRM2GpHqi9vwC3hqWvKTHUa9FrV3hkJ","id":46},{"first_name":"Abbott","address":"1NHtaEhZXzC64Da5JBLL1HfjdccNL8qdBW","id":47},{"first_name":"Shawna","address":"1P7bWYxC9obcVALuq91HWXqRdx4yRgpuJY","id":48},{"first_name":"Quincey","address":"1HCR32M2ARMBxaZF1F44Nqo4WqjQrQuRCA","id":49},{"first_name":"Lurette","address":"1PJ24z68s5PtxLKessdGfekUWLfKR3Za7F","id":50},{"first_name":"Sibylle","address":"13kS3jNEKX2asYC4VGNYACLpFf5UhzsPyo","id":51},{"first_name":"Remington","address":"16TsdJttZtHRBRqV3rh78CKhqsyiSM4rWr","id":52},{"first_name":"Kippy","address":"17wEa3dZwnQRwWJrrVU2dcRTcm1khK3YgM","id":53},{"first_name":"Tab","address":"1QCYCRL4bmmcBrAyJ2dCcdMw6qpBbtBzVS","id":54},{"first_name":"Buckie","address":"1CuYBx1MmXeJAdvhUQHGVUjKx6DKKnc9Tk","id":55},{"first_name":"Charissa","address":"1PMwmet9Dn2HFQ8R6EgAPMCk6qWkDbpb3s","id":56},{"first_name":"Candice","address":"1FcAwUJXDBoHqGXQ3XrMv9RjPiKkSDzXX3","id":57},{"first_name":"Jewel","address":"1Bv64KACTzMRAWULBBLw7B1utnDgjKWy2h","id":58},{"first_name":"Sinclare","address":"1DK5eMdT7jCR1xMQNzWyA7aeFoV2CbWvpa","id":59},{"first_name":"Llewellyn","address":"1PaU2nrU23NKZwgZaJEeKw2rd3aYMfXyZs","id":60},{"first_name":"Eden","address":"18EQyXeWnUcbddZXcthe2FCs1V2j2Piof9","id":61},{"first_name":"Yoko","address":"1JeZjohE3Lcd1N4QFquq8H54w2r7xRe5Bq","id":62},{"first_name":"Sephira","address":"16TULdWMc3Z1MY6T3k3tN5QCD3Qt4725eq","id":63},{"first_name":"Anneliese","address":"1NnB9Gsac6Q9SQ3Uc44UGNFvMdEeknjuqY","id":64},{"first_name":"Dukey","address":"165hJtyTx7ec9hhSDUqbZpmLreLa3oWn4S","id":65},{"first_name":"Eddi","address":"14PZ2NUftrC4CTDPDtwHR5aBveN5kSfGcG","id":66},{"first_name":"Sherill","address":"1NFsY3HwhkcWrVBkLEhS5WZTY2iFuyjubc","id":67},{"first_name":"Melany","address":"1bR7teoUEEaZKxFJZoPeeDYrhxQKrp4Jo","id":68},{"first_name":"Lucila","address":"1AHNpitBqopAmPz4FFH6w6oSSrpXrxVJ4y","id":69},{"first_name":"Artus","address":"1FLyK753G9tbr3xji2DXeeBcDrjq39gccJ","id":70},{"first_name":"Marian","address":"129GHGiZcvtgrsnSi97eyXQcmNzX4h7mMR","id":71},{"first_name":"Kariotta","address":"15Rsccbp1LFjLAEiTk5y3ceMZixCDoNCNt","id":72},{"first_name":"Nico","address":"1CzWks9jHn19DEhaENGD7byx8XgtYKodo7","id":73},{"first_name":"Mariann","address":"14GRTZHaJS4SkzuPnnnKsr3J29Z8c5oyMV","id":74},{"first_name":"Uri","address":"1HKQgd6qxBW2uW9zxNHYV5WZ8MNcsXCEuG","id":75},{"first_name":"Keefer","address":"1EKv2yBrZ4fCiT5V3VRf8Hxu7etjJ3Duii","id":76},{"first_name":"Paloma","address":"1BbzeqdpZMPjgSxNGV87DczcSvu5dQpQdh","id":77},{"first_name":"Orlan","address":"1NKuykJtqHF3DtZMxg9Kf2emzcuDX6zXXg","id":78},{"first_name":"Wallie","address":"1BhbwFZCa7QNBq6gYbfXcKeG6h5XUuzuAn","id":79},{"first_name":"Ethelbert","address":"12WpzKwAT73qrcvvfcnJZ3NYoehcf4NmB7","id":80},{"first_name":"Orelee","address":"198eSmyEDMVCu56SQ2vLyiNb93BNTvEHf8","id":81},{"first_name":"Jacquette","address":"14Z5PJ9CTj8jG72LD4y9ehisuAtzqmyGzi","id":82},{"first_name":"Deeyn","address":"1MmxYDtoH6DDrvCsQL74AjjwuDxdbw5PKw","id":83},{"first_name":"Wit","address":"1QFN9c1HefMiJJiLTZFt5VZNvLcaNp9THD","id":84},{"first_name":"Elianora","address":"1M5AeJf2f9n75bEVdojZKuL2LP1qVqudNo","id":85},{"first_name":"Malynda","address":"1JnHHBhNzUeVhR9PguG6BLbaMbZLMLwrgk","id":86},{"first_name":"Monroe","address":"1JjqsZXhzodNXo28ywNbAV8faSmZh9736q","id":87},{"first_name":"Paule","address":"1EbstRF3yWws13rSt5r5zKDAVL6CK5EsUe","id":88},{"first_name":"Reese","address":"1LEoWWWPD8QWaZxuzqrK6JJe9mnVGA4iQ9","id":89},{"first_name":"Cecile","address":"12vFMGEzxU3hTRGkuUKSWTabwXs3QxuCj3","id":90},{"first_name":"Golda","address":"1Q1BgpXYHeXY8RMgHawHF6ux3iu7h5zX59","id":91},{"first_name":"Christal","address":"1GaYvdBxfBpGsxXu9srcKF7KKMPX5BeJDt","id":92},{"first_name":"Dahlia","address":"1Aotv4aHGXe2dcLUuQPPnjyd5btgeKPsba","id":93},{"first_name":"Forester","address":"1NHDWya6oSzTAbP3kcqkgQq1o3TSb5Aqb4","id":94},{"first_name":"Bethena","address":"1Fr8izT2AD1GAv2gy86ZX6dNULsSCdLA5D","id":95},{"first_name":"Leone","address":"12wki1TK3W24DNg2YsQ4VKTq9oZZoFztmr","id":96},{"first_name":"Yolanthe","address":"113r7NMF7w98JfuSzDKd894tWZgHYwMWVC","id":97},{"first_name":"Sayre","address":"1E8zeySBRVwdTiVR9dhMX3YjdsY5VyBnrh","id":98},{"first_name":"Gabriela","address":"15HxSam4QNxYJWVVDFiFXw8iyrAMeVZvc3","id":99},{"first_name":"Rey","address":"1CMaqxBL3jU8s7oSRmkSdbquYKHtisuAhp","id":100}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.709036f5.chunk.js.map