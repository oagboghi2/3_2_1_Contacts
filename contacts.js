var fs = require("fs");

let allContacts = [];
let contactData = ([{
  "first_name": "Tanny",
  "last_name": "Vibert",
  "email": "tvibert0@illinois.edu"
}, {
  "first_name": "Tova",
  "last_name": "Myall",
  "email": "tmyall1@instagram.com"
}, {
  "first_name": "Engracia",
  "last_name": "Folger",
  "email": "efolger2@epa.gov"
}, {
  "first_name": "Conroy",
  "last_name": "Honsch",
  "email": "chonsch3@sohu.com"
}, {
  "first_name": "Virgina",
  "last_name": "Cankett",
  "email": "vcankett4@washington.edu"
}, {
  "first_name": "Mateo",
  "last_name": "Da Costa",
  "email": "mdacosta5@about.com"
}, {
  "first_name": "Ambrose",
  "last_name": "Scullard",
  "email": "ascullard6@timesonline.co.uk"
}, {
  "first_name": "Shaylah",
  "last_name": "Fairney",
  "email": "sfairney7@stumbleupon.com"
}, {
  "first_name": "Pier",
  "last_name": "Waine",
  "email": "pwaine8@unc.edu"
}, {
  "first_name": "Karita",
  "last_name": "Bough",
  "email": "kbough9@angelfire.com"
}, {
  "first_name": "Marguerite",
  "last_name": "Lafayette",
  "email": "mlafayettea@bravesites.com"
}, {
  "first_name": "Northrop",
  "last_name": "Bauchop",
  "email": "nbauchopb@pagesperso-orange.fr"
}, {
  "first_name": "Devon",
  "last_name": "Bocking",
  "email": "dbockingc@comcast.net"
}, {
  "first_name": "Willdon",
  "last_name": "Hedley",
  "email": "whedleyd@purevolume.com"
}, {
  "first_name": "Charil",
  "last_name": "Clegg",
  "email": "cclegge@weibo.com"
}, {
  "first_name": "Nessi",
  "last_name": "Bywaters",
  "email": "nbywatersf@shop-pro.jp"
}, {
  "first_name": "Mercy",
  "last_name": "Browncey",
  "email": "mbrownceyg@yelp.com"
}, {
  "first_name": "Didi",
  "last_name": "Grose",
  "email": "dgroseh@google.com.hk"
}, {
  "first_name": "Niccolo",
  "last_name": "Spruce",
  "email": "nsprucei@wordpress.com"
}, {
  "first_name": "Winston",
  "last_name": "Hixley",
  "email": "whixleyj@homestead.com"
}])

const addContact = function(firstName, lastName, email) {
  console.log('addContact:', 'TODO');
  let contact = {};
  contact.first_name = firstName;
  contact.last_name = lastName;
  contact.email = email;
  contactData.push(contact)
}


addContact("John", "Doe", "fakeNews@gmail.com");

const addContacts = function(contactData) {
  console.log('addContacts:', 'TODO')
  for(var i = 0; i < contactData.length; i++){

    allContacts.push("|" + contactData[i].first_name + ' ' + contactData[i].last_name + '  |' + contactData[i].email + "\n");
   }
  allContacts.sort();
  return allContacts;
}

const printContacts= function(contacts) {
  //console.log('printContacts:', 'TODO');
  let first_line = "Loading contact data..." + "\n" + "...Finished loading contact data." + "\n";
  let top_line = "All Contacts" + "\n" + "----------------------+--------------------------------" + "\n";
  var intro = fs.writeFile('contacts.txt', first_line, (err) => {
  });
  var top = fs.appendFile('contacts.txt', top_line, (err) => {
  });
  for(var i = 0; i < allContacts.length; i++){
        let allContactsString = allContacts.toString();
        var data = fs.appendFile('contacts.txt', allContactsString, (err) => {
          if (err) throw err;
        });
        return allContacts.toString();
      }

  console.log(first_line);
}


////////
//Test
/*
let array = ["Tanny","Tova","Engracia","Conroy"];
function arraySort(){
  console.log(array.sort());
}
arraySort();
*/

///////////////////////////////////////////////////////////////////////////


addContacts(contactData);

printContacts()
