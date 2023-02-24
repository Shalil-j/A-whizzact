import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonal',
  templateUrl: './testimonal.component.html',
  styleUrls: ['./testimonal.component.css']
})
export class TestimonalComponent implements OnInit {

  testimonal=[
    {name:'shalil',company:'TCS',msg:'I’m writing to ask if you wouldn’t mind giving us a short testimonial for our website. We’re updating a few pages, and I’m hoping to add something from you. It would link back to your site, so it’s actually a good thing for your SEO.'},
    {name:'ranjeet',company:'Wipro',msg:'Would this be ok with you? If this makes you even a little bit uncomfortable, no worries at all. But if you are ok with it, I can send you a very short blurb for you to review, or you can write a sentence or two and send it over. Whatever is easiest for you.'},
    {name:'Juned',company:'Infosys',msg:'As a bonus, this offer would include a link back to them, which is a good thing for them. We’ll assume they know how links work in Google …if they don’t, just share the video on that page!'},
    {name:'anil',company:'accenture',msg:'Did they say yes? Great. Now say thank you. And I don’t mean a short email message. It’s time to go overboard on gratitude with a handwritten note, a LinkedIn recommendation or something else unexpected. Try a few of these 15 unexpected ways to say thank you.'},
    {name:'kishan',company:'Whizzact',msg:'f you’re any good at your job, you see these from time to time (if you don’t, there are bigger problems you should fix before worrying about getting testimonials). The key is to spot them, then slow down and make the most of them.'},
  ]

  Testimonal: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    lazyLoad:true,
    autoplay:true,
    rewind:true,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      300: {
        items: 1
      },
      600: {
        items: 2
      }
    },
    nav: true,
  }
  constructor() {

   }

  ngOnInit(): void {
  }
}
