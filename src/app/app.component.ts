import { Component, OnInit } from '@angular/core';
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
//import "@fontsource/space-grotesk";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'port-app';
  picOfMe = '../assets/mePic1.png';
  blockChain = '../assets/block.jpg';
  linux ='../assets/linux.png';
  database='../assets/database-soccer.PNG';
  race = '../assets/race.PNG';
  vicWeb = '../assets/vic-web-port.PNG';
  linkden = '../assets/link.png';
  github = '../assets/G.png';
  email_form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.email_form = this.fb.group({
      from_name: [''],
      email_id: [''],
      subject: [''],
      message: [''],
    });
  }
  
  sendEmail(data: Event) {
    emailJs
      .sendForm(
        'service_pipskxg',
        'template_1x8qdqf',
        data.target as HTMLFormElement,
        'ZpnudcA0fXGAF2ERJ'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          if(result.status == 200){
          alert('Email sent successfully');

          setTimeout(() => {
            this.ngOnInit();
          }, 500);
        }
        },
        (error) => {
          alert('Error sending email, please try again later');
        }
      );
  }
  cancle() {
    this.ngOnInit();
  }

}
