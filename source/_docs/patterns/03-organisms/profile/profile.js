/* Change social media links to icons */

var $social_links = $('.social-links a');
var $first_name = $('#first-name').text();

$($social_links).each(function(){
  switch(this.text) {
    case "facebook":
    case "Facebook":
      $(this).addClass("social-icon facebook");
      this.innerHTML = '<span class="visually-hidden">' + $first_name + ' on Facebook</span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" /></svg>';
      break;

    case "instagram":
    case "Instagram":
      $(this).addClass("social-icon instagram");
      this.innerHTML = '<span class="visually-hidden">' + $first_name + ' on Instagram</span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>';
      break;

    case "flickr":
    case "Flickr":
      $(this).addClass("social-icon flickr");
      this.innerHTML = '<span class="visually-hidden">' + $first_name + ' on Flickr</span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M6.7,16.4c-2.6,0-4.7-2.1-4.7-4.6c0-2.6,2.1-4.7,4.6-4.7c2.6,0,4.7,2.1,4.7,4.6c0,0,0,0,0,0C11.3,14.4,9.2,16.4,6.7,16.4z"/><path d="M17.3,16.4c-2.6,0-4.7-2.1-4.7-4.6c0-2.6,2.1-4.7,4.6-4.7c2.6,0,4.7,2.1,4.7,4.6c0,0,0,0,0,0C22,14.4,19.9,16.4,17.3,16.4 C17.3,16.4,17.3,16.4,17.3,16.4z"/></svg>';
      break;

    case "linkedin":
    case "Linkedin":
    case "LinkedIn":
      $(this).addClass("social-icon linkedin");
      this.innerHTML = '<span class="visually-hidden">' + $first_name + ' on LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>';
      break;

    case "pinterest":
    case "Pinterest":
      $(this).addClass("social-icon pinterest");
      this.innerHTML = '<span class="visually-hidden">' + $first_name + ' on Pinterest</span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z" /></svg>';
      break;

    case "twitter":
    case "Twitter":
      $(this).addClass("social-icon twitter");
      this.innerHTML = '<span class="visually-hidden">' + $first_name + ' on Twitter</span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>';
      break;

    case "youtube":
    case "Youtube":
    case "YouTube":
      $(this).addClass("social-icon youtube");
      this.innerHTML = '<span class="visually-hidden">' + $first_name + ' on YouTube</span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>';
      break;
  }
});
