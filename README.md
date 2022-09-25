//#test
class User{
    static count=0;
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++;
    }
    printNumberOfUsers(){
        console.log('Registered users is '+ User.count);
    }
   
    register(){
        console.log(this.username +' is now registered');
    }
}
class Member extends User{
    constructor(username,email,password,Package){
    super(username,email,password)
    this.Package=Package;
   const todayDate=new Date();
   const membershipactivetillyear=todayDate.getFullYear();
   const membershipactivetillmonth=todayDate.getMonth();
   const membershipactivetillday=todayDate.getDay();
   this.membershipactivetilldate=new Date(membershipactivetillyear,membershipactivetillmonth+1,membershipactivetillday);
}
reniewMembership(){
    const todayDate=new Date();
    const membershipactivetillyear=todayDate.getFullYear();
    const membershipactivetillmonth=todayDate.getMonth();
    const membershipactivetillday=todayDate.getDay();
    if(this.Package==='Standered') {
     this.membershipactivetilldate=new Date(membershipactivetillyear,membershipactivetillmonth +1,membershipactivetillday);
    }
    else if(this.Package==='Yearly'){
        this.membershipactivetilldate=new Date(membershipactivetillyear +1,membershipactivetillmonth,membershipactivetillday); 
    }
}
    subcriptionActiveTill(){
        console.log(this.username+' is subscribed to '+this.Package +' uptill'+this.membershipactivetilldate);
    }

getPackage(){
    console.log(this.username +' subscribed the '+ this.Package +' member package');
}
}
const kapil=new Member('kapil','kapil@email.com','12334','Standered')
kapil.getPackage();
kapil.reniewMembership();
kapil.subcriptionActiveTill();

const shubh=new Member('shubh','shubh@gamil.com','123','Yearly');
shubh.reniewMembership();
shubh.subcriptionActiveTill();

