import { Component} from '@angular/core';

@Component({
  selector: 'people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})
export class PeopleInfoComponent {
  arr = 
    [{
        "id": 0,
        "name": "Carrillo Stewart",
        "gender": "male",
        "favoriteFruit": "melon"
    },
    {
        "id": 1,
        "name": "Ramos Wall",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        "id": 2,
        "name": "Figueroa Sampson",
        "gender": "male",
        "favoriteFruit": "mango"
    },
    {
        "id": 3,
        "name": "Marsh Stanley",
        "gender": "male",
        "favoriteFruit": "melon"
    },
    {
        "id": 4,
        "name": "Rush Mcmahon",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        "id": 5,
        "name": "Downs Meyer",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        "id": 6,
        "name": "Yesenia Mcgee",
        "gender": "female",
        "favoriteFruit": "mango"
    },
    {
        "id": 7,
        "name": "Charlene Jacobs",
        "gender": "female",
        "favoriteFruit": "melon"
    
    }
];
}