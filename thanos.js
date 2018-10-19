// var allUser = [1,2,3,4,5,6,7,8];
var allUser = document.querySelectorAll('#newuserlist > mat-card');

var mindStone = [];

var thanos = {
	snap_finger: function(){
		var arrayLength = allUser.length;
		var count = 0;
		while(count < (arrayLength / 2)){
			if (!this.uses.soul_stone.check(mindStone, index = this.uses.mind_stone())){
				var user = document.querySelectorAll('#newuserlist > mat-card')[index];

				console.log(user);
				this.uses.reality_stone.remove(user);
				this.uses.soul_stone.add(user);

				mindStone.push(index);
				count++;
			}
		}
	},
	uses: {
		soul_stone: {
			check: function (all, one) {
				var bool = false;
				all.forEach( function(element, index) {
					if (element == one){
						bool = true;
					}
				});
				return bool;
			},
			add: function (element) {
				$('#blacklist').append(element);
			}
		},
		mind_stone: function () {
			return Math.floor(Math.random() * allUser.length);
		},
		reality_stone: {
			remove: function (element) {
				element.remove();
			}
		}
	}
}
