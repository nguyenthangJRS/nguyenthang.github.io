const menu = document.querySelectorAll('.menu_link');
const fade_menu = document.querySelector('.menu');
const menu_btn = document.querySelector('.menu_btn .btn');
/////animation
const about = document.querySelector('.about_title p');
const edu = document.querySelector('.work_title');
const edu_title = document.querySelector('.work_title p');
const port_img = document.querySelector('.port_img');
const port_title = document.querySelector('.port_title');
const title_name = document.querySelector('.title_name');
const skill_title = document.querySelector('.skill_title');
const hyaku = document.querySelector('.hyaku');
const skill_pacent = document.querySelectorAll('.skill_pacent span');
const skill_items = document.querySelectorAll('.skill_items p');
const contact = document.querySelector('#contact .span');
const span_1 = document.querySelector('#contact .span .span_1');
const span_2 = document.querySelector('#contact .span .span_2');

const local_adress = document.querySelector('#contact .local_adress');
const local_contact = document.querySelector('#contact .local_contact');
const about_title_phone = document.querySelector('.about_title_phone');
const about_img = document.querySelector('.about_image');
const edu_title_phone = document.querySelector('.edu_title_phone');
const skill_title_phone = document.querySelector('.skill_title_phone');
/////////////// home
const home_name = document.querySelector('.home_name .name ');
const btn_1 = menu_btn.querySelector('.btn_1');
const btn_2 = menu_btn.querySelector('.btn_2');
const btn_3 = menu_btn.querySelector('.btn_3');
const bg_menu = document.querySelector('.bg_menu');
const pointer = document.querySelector('.pointer');
const bubble_1 = document.querySelector('.bubble_1');
const bubble_2 = document.querySelector('.bubble_2');

const imgApear = document.querySelectorAll(".apearen");
const home = document.querySelector('a[href="#home"]');
const about_1 = document.querySelector('a[href="#about"]');
const education = document.querySelector('a[href="#education"]');
const skill = document.querySelector('a[href="#skill"]');
const portfolio = document.querySelector('a[href="#portfolio"]');
const contact_1 = document.querySelector('a[href="#contact"]');


const resize_skill_2 = (skill_items,skill_pacent,hyaku) => {
    skill_pacent.forEach(item =>{
        item.style.animation = `skill_show 1.4s ease-in-out 0.5s forwards`;
    })
    skill_items.forEach(item =>{
        item.style.animation = `skill_title 0.8s ease-in-out 0.5s forwards`;
    })
    hyaku.style.animation  = `skill_title 0.8s ease-in-out 2s forwards`;
} 
const resize_contact = (contact,span_1,span_2,local_adress,local_contact) => {
    contact.style.animation = `span_title 1s ease-in-out forwards`;
    span_1.style.animation = `span_title_1 0.7s ease-in-out 1s forwards`;
    span_2.style.animation = `span_title_2 0.7s ease-in-out 1.7s forwards`;
    local_adress.style.animation = ` port_img 1.2s ease-in-out 1s forwards`;
    local_contact.style.animation = `port_title 1.2s ease-in-out 1s forwards`;
}
const resize_contact_0 = (contact,span_1,span_2) => {
    contact.style.animation = `none`;
    span_1.style.animation = `none`;
    span_2.style.animation = `none`;
}
// add mouse movie
document.addEventListener('mousemove',function(e){
    let x = e.pageX;
    let y = e.pageY;
    pointer.style.top = `${y}px`;
    pointer.style.left = `${x}px`;
})

window.onload = () => {
    let flag = false;
    let  bg_flag = false;
    const check_bg = () => {
        bg_menu.style.animation = bg_flag ? `show_bg_menu 0.5s ease-in-out forwards` : 'hide_bg_menu 0.5s ease-in-out forwards';
    }
    //////////////////////////////////// menu btn
    const check_menu = (flag) => {
        if(flag){
            btn_1.classList.add('show_1')
            btn_2.classList.add('show_2')
            btn_3.classList.add('show_3')
            fade_menu.style.animation = `fade_menu 0.7s ease-in-out forwards`;
        }else{
            fade_menu.style.animation = `none`;
            if( btn_1.classList.contains('show_1')){
                btn_1.classList.remove('show_1')
            }
            if( btn_2.classList.contains('show_2')){
                btn_2.classList.remove('show_2')
            }
            if( btn_3.classList.contains('show_3')){
                btn_3.classList.remove('show_3')
            }
        }
    }
    
    menu_btn.onclick = () =>{
        flag = !flag 
        bg_flag = !bg_flag;
        check_bg();
        check_menu(flag);
    }
    menu.forEach(nav => {
        nav.onclick = (e) => {
            bg_flag =false;
            check_bg();
            flag =false;
            check_menu(flag);
            fade_menu.style.animation = `none`;
            flag = false;
            if( btn_1.classList.contains('show_1')){
                btn_1.classList.remove('show_1')
            }
            if( btn_2.classList.contains('show_2')){
                btn_2.classList.remove('show_2')
            }
            if( btn_3.classList.contains('show_3')){
                btn_3.classList.remove('show_3')
            }
        }
    })
    bg_menu.onclick = () => {
        bg_flag = false;
        check_bg();
        flag =false;
        check_menu(flag);
    }

    // intersection
    let option ={
        threshold:1,
        rootMargin: "0px 0px -25px 0px"
    }
    const observer= new IntersectionObserver(function(entries,observer){
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return;
            }else{
                    entry.target.classList.toggle("apear");
                    observer.unobserve(entry.target);
                }
            })
        },option);
        imgApear.forEach(fate =>{
            observer.observe(fate);
        })
    // intersection

    menu.forEach(item => {
        item.onmouseenter = (event)=>{
            const items_menu = event.target;
            const span_menu = items_menu.parentNode.querySelector('span')
            span_menu.style.transform = `translateY(${0})`
            span_menu.style.opacity = 1
        }
        item.onmouseleave = (e)=>{
            const items_menu = e.target;
            const span_menu = items_menu.parentNode.querySelector('span')
            span_menu.style.transform = `translateY(${-10}px)`
            span_menu.style.opacity = 0
        }
    })

    const change_bg = (scroll,a,b,c,d,e) => {
        home.style.background = scroll < a ? `#70a1ff` : '#f1f2f6';
        about_1.style.background = scroll > a && scroll <= b ? `#70a1ff` : '#f1f2f6';
        education.style.background = scroll > b && scroll <= c ? `#70a1ff` : '#f1f2f6';
        skill.style.background = scroll > c && scroll <= d ? `#70a1ff` : '#f1f2f6';
        portfolio.style.background = scroll > d && scroll <= e ? `#70a1ff` : '#f1f2f6';
        contact_1.style.background = scroll > e ? `#70a1ff` : '#f1f2f6';
    }

    // computer
    if(window.innerWidth>=1500){
        window.onscroll = (e) =>{
            let scroll = window.scrollY;
            console.log(1);
               console.log(scroll);
               change_bg(scroll,567,1536,2500,3474,4636);
            //////////// about 
            about.style.animation = scroll < 500 ? 'none' : `show_title 1.5s ease-in-out 0.5s forwards`;
            // skill 
            edu.style.animation = scroll < 1550 ? 'none' : `port_title 1s ease-in-out 0.5s forwards`;
            edu_title.style.animation = scroll < 1550 ? 'none' : `show_title_edu  1s ease-in-out 0.5s forwards`;
            skill_title.style.animation = scroll < 2450 ? 'none' : `skill_title 1.2s ease-in-out 0.4s forwards`;
            if(scroll>2700){
                resize_skill_2(skill_items,skill_pacent,hyaku);
            }
            // portfolio/
            port_img.style.animation = scroll < 3340 ? 'none' : `port_img 1.3s ease-in-out 0.3s forwards`;
            title_name.style.animation = scroll < 3700 ? 'none' : `show_port 1s ease-in-out forwards`;
            port_title.style.animation = scroll < 3050 ? 'none' : `port_title 1.3s ease-in-out 0.5s forwards`
            // contact 
            if(scroll< 4450){
                resize_contact_0(contact,span_1,span_2)
            }else{
                resize_contact(contact,span_1,span_2,local_adress,local_contact);
            }
        }
    }
    //ipad
    if(window.innerWidth >=1024 && window.innerWidth <1500){
        window.onscroll = () =>{
            let scroll = window.scrollY;
             console.log(scroll)
            change_bg(scroll,650,1100,1940,2500,3064);
            //////////// about 
            about.style.animation = scroll < 400 ? 'none' : `show_title 1.5s ease-in-out 0.5s forwards`;
            // edu 
            edu.style.animation = scroll < 1000 ? 'none' : `port_title 1s ease-in-out 0.5s forwards`;
            edu_title.style.animation = scroll < 1000 ? 'none' : `show_title_edu  1s ease-in-out 0.5s forwards`;
            // skill 
            skill_title.style.animation = scroll < 1700 ? 'none' : `skill_title 1.2s ease-in-out 0.4s forwards`;
            if(scroll>1800){
                resize_skill_2(skill_items,skill_pacent,hyaku);
            }
            // portfolio/
            title_name.style.animation = scroll < 2500 ? 'none' : `show_port  1s ease-in-out forwards`;
            port_title.style.animation = scroll < 2500 ? 'none' : `port_title 1.3s ease-in-out 0.5s forwards`
            // contact 
            if(scroll< 3000){
                resize_contact_0(contact,span_1,span_2)
            }else{
                resize_contact(contact,span_1,span_2,local_adress,local_contact);
            }
        }
    }
    //ipad mini
    if(window.innerWidth >=750 && window.innerWidth <=1023){
        window.onscroll = () =>{
            let scroll = window.scrollY;
         
             console.log(scroll)
            change_bg(scroll,650,1500,2140,3200,4264);
            /// about 
            about.style.animation = scroll < 170 ? 'none' : `show_title 1.5s ease-in-out 0.5s forwards`;
            // edu 
            edu.style.animation = scroll < 1300 ? 'none' : `port_title 1s ease-in-out 0.5s forwards`;
            edu_title.style.animation = scroll < 1300 ? 'none' : `show_title_edu  1s ease-in-out 0.5s forwards`;
            // skill 
            skill_title.style.animation = scroll < 2150 ? 'none' : `skill_title 1.2s ease-in-out 0.4s forwards`;
            if(scroll>2200){
                resize_skill_2(skill_items,skill_pacent,hyaku);
            }
            // portfolio/
            title_name.style.animation = scroll <2683 ? `none`:` span_title_1 2s ease-in-out forwards`;
            // contact //////////
            if(scroll< 3970){
                resize_contact_0(contact,span_1,span_2)
               
            }else{
                resize_contact(contact,span_1,span_2,local_adress,local_contact);
            }
        }
    }
    ////////// phone //////////////////////////////////////////
    if(window.innerWidth >=410 && window.innerWidth <=749){
        window.onscroll = () =>{
            let scroll = window.scrollY;

             console.log(scroll)
            change_bg(scroll,650,1100,1900,2500,3064);
            //////////// about 
            about_title_phone.style.animation =  scroll < 131 ? `none` :  `work_img 1s ease-in-out 0.3s forwards`;
            about_img.style.animation =  scroll < 297 ? `none` : `skill_title 1s ease-in-out 0.6s forwards`;
            // edu
            edu_title_phone.style.animation =  scroll < 1250 ? `none` :  `work_img 1s ease-in-out 0.3s forwards`;
            // skill 
            skill_title_phone.style.animation = scroll < 1830 ? `none` : `skill_title 1.2s ease-in-out 0.4s forwards`;
            if(scroll>2138){
                resize_skill_2(skill_items,skill_pacent,hyaku);
            }
            // portfolio/
            title_name.style.animation = scroll <2683 ? `none`:` span_title_1 2s ease-in-out  forwards`;
            // contact //
            contact.style.animation = scroll < 3702 ? `none` : `span_title 1s ease-in-out 0.5s forwards`;
            span_1.style.animation = scroll < 3702 ? `none` : `span_title_1 0.7s ease-in-out 1.5s forwards`;
            span_2.style.animation = scroll < 3702 ? `none` : `span_title_2 0.7s ease-in-out 2.2s forwards`;
            local_adress.style.animation = scroll < 3859 ? `none` : `port_img 1s ease-in-out 0.5s forwards`;
            local_contact.style.animation = scroll < 4100 ? `none` : `port_title 1s ease-in-out 0.5s forwards`;
        }
    }
    ////////////////// small phone //////////////////////////////////////////
    if(window.innerWidth <410){
        window.onscroll = () =>{
            let scroll = window.scrollY;
            // console.log(scroll)
            change_bg(scroll,370,1387,2314,3260,4180);

    //////////// about 
            about_title_phone.style.animation =  scroll < 150 ? `none` :  `work_img 1s ease-in-out 0.3s forwards`;
            about_img.style.animation =  scroll < 350 ? `none` : `skill_title 1s ease-in-out 0.6s forwards`;
            // edu
            edu_title_phone.style.animation =  scroll < 900 ? `none` :  `work_img 1s ease-in-out 0.3s forwards`;
            // skill 
            skill_title_phone.style.animation = scroll < 1590 ? `none` : `skill_title 1s ease-in-out 0.3s forwards`;
            if(scroll>2138){
                resize_skill_2(skill_items,skill_pacent,hyaku);
            }
            // portfolio/
            title_name.style.animation = scroll <2500 ? `none`:` span_title_1 2s ease-in-out  forwards`;
            // contact //////////
            contact.style.animation = scroll < 3530 ? `none` : `span_title 1s ease-in-out 0.5s forwards`;
            span_1.style.animation = scroll < 3530 ? `none` : `span_title_1 0.7s ease-in-out 0.8s forwards`;
            span_2.style.animation = scroll < 3530 ? `none` : `span_title_2 0.7s ease-in-out 1.5s forwards`;
            local_adress.style.animation = scroll < 3700 ? `none` : `port_img 1s ease-in-out 1s forwards`;
            local_contact.style.animation = scroll < 3920 ? `none` : `port_img 1s ease-in-out 1s forwards`;
        }
    }
    // first load
    let myName = 'NGUYEN TIEP THANG'
    let show = []
    let text = '';
    
    const show_name = () => {
        const c = setTimeout(()=>{
            for(let i = 0;i<myName.length;i++){
                const time = setTimeout(() => {
                    let x = myName.charAt(i)
                    show.push(x)
                    text += show[i]
                    home_name.textContent = `${text}`
                },i*130)
            }
        },3100)

    }
    show_name();
}
/////////////onmousemovie //////////////////////
