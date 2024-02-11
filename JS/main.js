// Car: object  .... Properties: Name, color, model.....Method : can start.. (which it can or work)

// this is object
const LastBil = {
  // this is the properties
  Name: "Scania",
  Model: "Sacania 2022 s",
  Color: "Diamond White",
  NoOfWheel: 28,
  Drive: "All wheel drive",

  // to call properties  i will add one function
  // This dia specify kore disi what i want

  ToCallProperties: function (properties) {
    console.log(
      "The last bil Name is: " + this.Name,

      "The last bil model is: " + this.Model,

      "The last bil color is : " + this.Color,

      "The last bil driving condition is: " + this.Drive,

      "How many wheel have the last Bil: " + this.Wheel,

      properties
    );
  },

  // Now we will take function (method) what is does

  CanCarry: function () {
    console.log(
      "This last bil can transport lagguage rom ne country to another country:"
    );
  },

  CanStart: function () {
    console.log("This last bil can start automatically:");
  },

  CanBrake: function () {
    console.log("Thsi last bil have automatic braking system");
  },

  CanCamera: function () {
    console.log("This bil have multiple care for safety purposes");
  },

  CanAutoDrive: function () {
    console.log("This last bil have automatic braking system");
  },
  // This is the  all function and this is how we can add multiply function in one project.

  // Now we will add multiply object in same project: Here now we need to use = this sign.

  // Here tarin is the object.
  Train: {
    Name: "Passenger train",
    Model: "Sj X-2000",
    Color: "Silver gray",

    // Now we will add propertis for Train Object.

    CanCarry: function () {
      console.log("This is a passenger train ");
    },

    CanStart: function () {
      console.log("This tarin can start and driv e automatically");
    },

    CanBrake: function (Yes) {
      console.log("This train have automatic bracking system:", Yes);
    },
  },

  // Add another object Bus

  Bus: {
    // Properties of Object

    Name: "Volvo",
    Model: " Volvo SC-20222",
    Wheel: 16,
    Color: "Red",

    // Add another function for Buss

    CanCarry: function () {
      console.log("This bus can carry 100 passenger");
    },

    CanStart: function () {
      console.log("This is a autmatic start system with voice control");
    },

    Canbrake: function () {
      console.log("This bus have automatic bracking system");
    },

    CanAutodrive: function (Positive) {
      console.log("This bus have auto drive option:", Positive);
    },
    // Add array in function tab

    ColorScope: ["Red", "White", "Silkver", "Gray"],
  },
};

// How to call Bus color....Just call the iteam from oder:

/* console.log(LastBil.Bus.Color); */

// how to calll Arry Here with index no: same but use array sign

/* console.log(LastBil.Bus.ColorScope[3]); */

// now we will call Function: Argument add korte hobe then it will give to function also. Here yes is argument

// function call kote hole  paramete add korte hobe then atake assign korte hobe

/* LastBil.Train.CanBrake("Yes");

// console.log thakle  undefined likha thakbe */

// different naming hole o problem nail

/* LastBil.Bus.CanAutodrive(" Yes it can drive without driver"); */

/* now I will call properties  from function
Here i have to add String conkonation 
It means i have to add + .this
command to call them
 */

LastBil.ToCallProperties("The last bil properties is:");
