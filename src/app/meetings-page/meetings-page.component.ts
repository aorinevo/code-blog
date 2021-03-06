import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ancb-meetings-page',
  templateUrl: './meetings-page.component.html',
  styleUrls: ['./meetings-page.component.css']
})
export class MeetingsPageComponent implements OnInit {
  
  meetings: Object[] = [
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "gothamsass",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/gothamsass/events/228708042/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "Web Components: Enabling ComponentDriven, Modular, Semantic,Accessible Processes",
      "member_name": "",
      "event_url": "https://www.meetup.com/gothamsass/events/228708042/",
      "event_id": "228708042",
      "group_id": "",
      "event_date": "Tue Feb 23 19:00:00 EST 2016",
      "event_name": "Web Components: Enabling ComponentDriven, Modular, Semantic,Accessible Processes",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/8/3/b/f/global_439113727.jpeg",
      "updated": ""
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "EmberJS-NYC",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/EmberJS-NYC/events/228440679/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "February Meetup - Alex Matchneer on ember-concurrency",
      "member_name": "",
      "event_url": "https://www.meetup.com/EmberJS-NYC/events/228440679/",
      "event_id": "228440679",
      "group_id": "",
      "event_date": "Thu Feb 27 19:00:00 EST 2016",
      "event_name": "February Meetup - Alex Matchneer on ember-concurrency",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/d/4/b/e/global_447234462.jpeg",
      "updated": ""
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "hackerhours",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/hackerhours/events/231381860/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "Sundays @ Gregory's Coffee",
      "member_name": "",
      "event_url": "https://www.meetup.com/hackerhours/events/231381860/",
      "event_id": "231381860",
      "group_id": "",
      "event_date": "Sun Jun 12 11:00:00 EST 2016",
      "event_name": "Sundays @ Gregory's Coffee",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/3/7/7/a/global_199874202.jpeg",
      "updated": ""
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "hackerhours",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/hackerhours/events/231857125/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "Sundays @ Gregory's Coffee",
      "member_name": "",
      "event_url": "https://www.meetup.com/hackerhours/events/231857125/",
      "event_id": "231857125",
      "group_id": "",
      "event_date": "Sun Jul 17 11:00:00 EST 2016",
      "event_name": "Sundays @ Gregory's Coffee",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/3/7/7/a/global_199874202.jpeg",
      "updated": ""
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "gothamsass",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/gothamsass/events/229607375/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "Bridging the gap between design & development",
      "member_name": "",
      "event_url": "https://www.meetup.com/gothamsass/events/229607375/",
      "event_id": "229607375",
      "group_id": "",
      "event_date": "Tue Jul 27 19:00:00 EST 2016",
      "event_name": "Bridging the gap between design & development",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/8/3/b/f/global_439113727.jpeg",
      "updated": ""
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "hackerhours",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/hackerhours/events/232428632/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "Sundays @ Gregory's Coffee",
      "member_name": "",
      "event_url": "https://www.meetup.com/hackerhours/events/232428632/",
      "event_id": "232428632",
      "group_id": "",
      "event_date": "Sun Aug 7 11:00:00 EST 2016",
      "event_name": "Sundays @ Gregory's Coffee",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/3/7/7/a/global_199874202.jpeg",
      "updated": ""
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "EmberJS-NYC",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/EmberJS-NYC/events/232880003/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "Ember Project Night: Bring Your Own Project",
      "member_name": "",
      "event_url": "https://www.meetup.com/EmberJS-NYC/events/232880003/",
      "event_id": "232880003",
      "group_id": "",
      "event_date": "Mon Aug 8 19:00:00 EST 2016",
      "event_name": "Ember Project Night: Bring Your Own Project",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/d/4/b/e/global_447234462.jpeg",
      "updated": ""
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "New-York-MongoDB-User-Group",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/New-York-MongoDB-User-Group/events/233217860/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "MongoDB Bug Hunt: Hands-On Session",
      "member_name": "",
      "event_url": "https://www.meetup.com/New-York-MongoDB-User-Group/events/233217860/",
      "event_id": "235760315",
      "group_id": "",
      "event_date": "Wed Sep 7 18:00:00 EST 2016",
      "event_name": "MongoDB Bug Hunt: Hands-On Session",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/e/0/1/3/global_442077363.jpeg",
      "updated": ""
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "AngularNYC",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/AngularNYC/events/235760315/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "#NotAMeetup #experimental 4-8PM Angular2 training",
      "member_name": "",
      "event_url": "https://www.meetup.com/AngularNYC/events/235760315/",
      "event_id": "235760315",
      "group_id": "",
      "event_date": "Mon Nov 28 16:00:00 EST 2016",
      "event_name": "#NotAMeetup #experimental 4-8PM Angular2 training",
      "id": "",
      "photo_url": "",
      "updated": ""
    },
    {
      "member_id": "202374922",
      "rsvp_comment": "",
      "group_name": "NYC D3.js",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/NYC-D3-JS/calendar/235674947",
      "published": "Wed Nov 30 18:55:52 EST 2016",
      "rsvp_response": "Yes",
      "title": "NYC D3.js: New RSVP",
      "member_name": "Daniel Riley",
      "event_url": "https://www.meetup.com/NYC-D3-JS/calendar/235674947",
      "event_id": "235674947",
      "group_id": "4595352",
      "event_date": "Wed Nov 30 19:00:00 EST 2016",
      "event_name": "November 2016 d3.js Meetup",
      "id": "ch4595352-ts9223370556304623807-rsvp-1641784139",
      "photo_url": "http://photos3.meetupstatic.com/photos/member/6/c/c/1/thumb_259467841.jpeg",
      "updated": "Wed Nov 30 18:55:52 EST 2016"
    },
    {
      "group_name": "NY Tech Meetup",
      "link": "https://www.meetup.com/ny-tech/events/234860670/",
      "title": "NY Tech Meetup: New RSVP",
      "event_url": "https://www.meetup.com/ny-tech/events/234860670/",
      "event_id": "234860670",
      "event_date": "Tues Jan 10 19:00:00 EST 2017",
      "event_name": "January 2017 NY Tech Meetup and Afterparty",
      "photo_url": "https://www.meetup.com/ny-tech/",
    },
    {
      "group_name": "AngularNYC Meetup",
      "link": "https://www.meetup.com/AngularNYC/events/236822164/",
      "title": "AngularNYC Meetup Jan 2016, Advanced @ngrx and Transitioning to ng2 apps",
      "event_url": "https://www.meetup.com/AngularNYC/events/236822164/",
      "event_id": "236822164",
      "event_date": "Tues Jan 17 18:00:00 EST 2017",
      "event_name": "AngularNYC Meetup Jan 2016, Advanced @ngrx and Transitioning to ng2 apps",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/d/0/a/e/global_454673422.jpeg"
    },
    {
      "group_name": "NYC D3.js",
      "link": "https://www.meetup.com/NYC-D3-JS/calendar/236673854",
      "title": "January 2017 D3.js Meetup",
      "event_url": "https://www.meetup.com/NYC-D3-JS/calendar/236673854",
      "event_id": "236673854",
      "event_date": "Thur Jan 19 19:00:00 EST 2017",
      "event_name": "January 2017 D3.js Meetup",
      "photo_url": "http://photos3.meetupstatic.com/photos/member/6/c/c/1/thumb_259467841.jpeg",
    },
    {
      "group_name": "hackerhours",
      "link": "https://www.meetup.com/hackerhours/events/238027281/",
      "title": "January 2017 D3.js Meetup",
      "event_url": "https://www.meetup.com/hackerhours/events/238027281/",
      "event_id": "236673854",
      "event_date": "Thur Jan 19 19:00:00 EST 2017",
      "event_name": "January 2017 D3.js Meetup",
      "photo_url": "http://photos3.meetupstatic.com/photos/member/6/c/c/1/thumb_259467841.jpeg",
    },
    {
      "member_id": "",
      "rsvp_comment": "",
      "group_name": "",
      "item_type": "new_rsvp",
      "link": "https://www.meetup.com/hackerhours/events/232428632/",
      "published": "",
      "rsvp_response": "Yes",
      "title": "Sundays @ Gregory's Coffee",
      "member_name": "",
      "event_url": "https://www.meetup.com/hackerhours/events/232428632/",
      "event_id": "232428632",
      "group_id": "",
      "event_date": "Sun Aug 7 11:00:00 EST 2016",
      "event_name": "Sundays @ Gregory's Coffee",
      "id": "",
      "photo_url": "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/3/7/7/a/global_199874202.jpeg",
      "updated": ""
    },
  ];

  constructor() { 
  }

  ngOnInit() {
    this.meetings.sort(function(a,b){
      return (new Date(b["event_date"])).getTime() - (new Date(a["event_date"])).getTime();
    });
  }

}
