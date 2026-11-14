type Personal_Details = {
    name: string;
    age: number;
};

type college_Details = {
    college: string;
    course: string;
};

type full_Details = Personal_Details & college_Details;

let Student: full_Details = {
    name: "anprisidi",
    age: 18,
    college: "Al-khatheeb polytechnic",
    course: "computer science"
};

console.log("Student details:", Student);