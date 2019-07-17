function SuperType() {
    this.superType = 'superType';
}

function SubType() {
    this.subType = 'subType';
}

SuperType.prototype.getSuperType = function() {
    console.log(this.superType);
}

SubType.prototype = new SuperType();

SubType.prototype.getSubType = function() {
    console.log(this.subType)
}

var sub = new SubType();

sub.getSubType();
sub.getSuperType()