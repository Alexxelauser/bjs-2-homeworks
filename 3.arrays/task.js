function compareArrays(arr1, arr2) {
    if(arr1.length === arr2.length){
        return arr1.every((el, i) => el === arr2[i]);
        } else {
        return false;
    }
}

function getUsersNamesInAgeRange(users, gender) {
    let result;
    let user;
  return result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);
}