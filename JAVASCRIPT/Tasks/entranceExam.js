const prompt = require("prompt-sync")();

const E = "Welcome to Entrance Exam";

console.log(E, "\n1.EAMCET\n2.ECET");

const Exam = prompt("choose your Exam : ");

if (Exam == "EAMCET" || Exam == "ECET") {
  console.log("your selected Exam : ", Exam);
  console.log("Exam completed");
  const Rank = parseInt(prompt("Enter your Rank : "));

  if (Rank <= 1000) {
    console.log("select your university, \n1.JNTUK \n2.JNTUH \n3.JNTUA");
    const university = prompt("choose your university Name : ");
    if (university == "JNTUK" || "JNTUH" || "JNTUA") {
      console.log(`you are joined in ${university} university.`);
      console.log(
        "select your stream, \n1.MBA \n2.BA \n3.BCOM \n4.BSC \n5.MCA"
      );
      const Stream = prompt("select your stream : ");
      if (Stream == "MBA") {
        console(
          `you are studying Master of Business Administration in ${university} university.`
        );
      } else if (Stream == "BA") {
        console.log(
          `you are studying in Bachelor of Arts in ${university} university.`
        );
      } else if (Stream == "BCOM") {
        console.log(
          `you are studying in Bachelor of Commerce in ${university} university.`
        );
      } else if (Stream == "BSC") {
        console.log(
          `you are studying in Bachelor of science in ${university} university.`
        );
      } else if (Stream == "MCA") {
        console.log(
          `you are studying in Master of Computer Applications in ${university} university.`
        );
      } else {
        console.log("you are not selected to join stream.");
      }
    }
  } else if (Rank > 1000) {
    console.log("you will be selected colleges only");
    const college = prompt("enter your college Name : ");

    console.log(`you are joined in ${college} university.`);
    console.log(
      "select your branch, \n1.CSE \n2.EEE \n3.ECE \n4.MECH \n5.CIVIL"
    );
    const Branch = prompt("select your Branch : ");
    if (Branch == "CSE") {
      console(
        `you are studying Computer Science Engineering in ${college} college.`
      );
    } else if (Branch == "EEE") {
      console.log(
        `you are studying Electrical and Electronics Engineering in ${college} college.`
      );
    } else if (Branch == "ECE") {
      console.log(
        `you are studying Electronics and Communication Engineering in ${college} college.`
      );
    } else if (Branch == "MECH") {
      console.log(
        `you are studying Mechanical Engineering in ${college} college.`
      );
    } else if (Branch == "CIVIL") {
      console.log(`you are studying Civil Engineering in ${college} college.`);
    } else {
      console.log("you are not selected to join colleges.");
    }
  }
} else {
  console.log("choose your correct Entrance Exam");
}
