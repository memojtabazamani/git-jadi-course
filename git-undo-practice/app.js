// تغییر اول: اضافه کردن اسم به Greeting
function greeting(name) {
    console.log("Hello " + name);
}

// تغییر دوم: اضافه کردن ضرب (اشتباهی!)
function calculateSum(a, b) {
    return a + b;  // این باگ را می‌خواهی بعداً درست کنی
}

// تغییر سوم: بهبود ShowMessage
function showMessage(msg) {
    console.log(msg + " - ");  // بهتر از alert است
}