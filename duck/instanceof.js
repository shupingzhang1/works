console.log('instanceof 获取对象是否是某个类的实例');
// 多态
// 
var makeSound=function(animal){
	if(typeof animal.sound ==="function")
		{animal.sound();
		}
	// if(animal instanceof Duck){
	// 	console.log('嘎嘎嘎');
	// }
	// else if(animal instanceof Chicken)
	// {
	// 	console.log('咯咯咯');
	// }
	// else if(animal instanceof Dog)
	// {
	// 	console.log('汪汪汪');
	// }
}
var Duck=function(){};
Duck.prototype.sound = function() {
	console.log('嘎嘎嘎');
};
var Chicken=function(){};
Chicken.prototype.sound = function() {
	console.log('咯咯咯');
};
var Dog=function(){};
Dog.prototype.sound = function() {
	console.log('汪汪汪');
};
var duck=new Duck();
var chicken=new Chicken();
var wz=new Dog();
makeSound(duck);
makeSound(chicken);
makeSound(wz);
