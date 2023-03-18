import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() {
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

team_Info=[
  {
    name:'durgesh panday',
    designation:'founder & Tech lead',
    profile:'https://media.licdn.com/dms/image/C5103AQE1eJnCltcQDA/profile-displayphoto-shrink_400_400/0/1521021058503?e=1684368000&v=beta&t=yz-83aRdNoNtvpFJy_FKHinPNbOM2lp-2cbv5PIHMwQ',
    linkedin_url:'https://www.linkedin.com/in/durgeshopandey/'
  },
  {
    name:'raman mishra',
    designation:'SEO and Android Developor',
    profile:'https://media.licdn.com/dms/image/D4D03AQFRARjk6JzcEQ/profile-displayphoto-shrink_400_400/0/1675149657843?e=1684368000&v=beta&t=fz1i0X5276CX62D82b6_cgL8KojhVPE0qgw5jwQqIic',
    linkedin_url:'https://www.linkedin.com/in/ramanmishraonline/'
  },
  {
    name:'Sanjay Jaiswar',
    designation:'Data Enthusiast',
    profile:'https://media.licdn.com/dms/image/D4D03AQGPLyhrz5Ph7w/profile-displayphoto-shrink_400_400/0/1677635501367?e=1684368000&v=beta&t=eaYtwJXSglW2z3Tbrf248P_UFLUM_9hJCIOR0DBKl5E',
    linkedin_url:'https://www.linkedin.com/in/sanjay-jaiswar-8944a426/'
  },
  {
    name:'Sunil Gupta',
    designation:'DevOps Engineer',
    profile:'https://media.licdn.com/dms/image/C5103AQF79H0ejtiA1A/profile-displayphoto-shrink_400_400/0/1517442447433?e=1684368000&v=beta&t=z0HxxpPOy7uOyugNRXHHW7PIi5oe509AMZIvq6qBuB8',
    linkedin_url:'https://www.linkedin.com/in/sunil-gupta-ba793b115/'
  },
  {
    name:'shalil jaiswar',
    designation:'fonend developer & Ux/Ui designer',
    profile:'https://media.licdn.com/dms/image/D4D03AQGt1zeSsVkwJg/profile-displayphoto-shrink_400_400/0/1666643022802?e=1684368000&v=beta&t=BTRZtsYuTSA2jxOQepitY569zJflANwfekZzjr4c_fY',
    linkedin_url:'https://www.linkedin.com/in/shaxlil/'
  },  {
    name:'Anurag Mishra',
    designation:'junior frontend development',
    profile:'https://media.licdn.com/dms/image/D5603AQFPj0IYHpcg8g/profile-displayphoto-shrink_400_400/0/1675744608731?e=1684368000&v=beta&t=FbCmkEMtSPznaGhdzjaqPQZVC28pO99Iy5lAIjmtZkE',
    linkedin_url:'https://www.linkedin.com/in/anurag-mishra-6b8934202/'
  },  {
    name:'Kishan Chaturvedi',
    designation:'junior frontend development',
    profile:'https://media.licdn.com/dms/image/D4D03AQFz_-EntO4UzQ/profile-displayphoto-shrink_400_400/0/1671550841795?e=1684368000&v=beta&t=bt4spVbHFD4OMEZbbK39-LHHgaIN2bVdm2jaW_qYVOg',
    linkedin_url:'https://www.linkedin.com/in/kishan-chaturvedi-89b592253/'
  },
  {
    name:'Aliraja Khan ',
    designation:'junior frontend development',
    profile:'https://media.licdn.com/dms/image/D5603AQGylzq12zQQ0A/profile-displayphoto-shrink_400_400/0/1671534977873?e=1684368000&v=beta&t=O5zdN_LoburdMtDw5vXY-gQHUS3LVBKmtgez7d7gmAI',
    linkedin_url:'https://www.linkedin.com/in/aliraja-khan-912312147/'
  },

]

}
