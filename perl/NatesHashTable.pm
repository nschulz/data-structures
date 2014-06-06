package NatesHashTable;
use strict;

my $storageSize = 477;
my $alphaMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

sub keyToIndex {
	my $key = $_[0];
	my $keyValue = 0;

	foreach my $char (split //, $key) {
		$keyValue += index($alphaMap, $char);
	}
	return $keyValue;
}

sub new {
	# use shift by itself = shift @_;
	my $class = shift;
	my $self = {dataStorage=>{}};
	bless($self, $class);
	
	$self->{storageSize} = $storageSize;
	
	if ($_[0]) {
		$self->{storageSize} = $_[0];
	}
	
	$self->{dataStorage} = ();
	
	return $self;
}

sub insert {
	my $self = shift;
	my $anObject = $_[0];
	my $aKey = $anObject->getKey();
	my $index = keyToIndex($aKey);
	my $start = $index;
	my @dataStorage = $self->{dataStorage};

	while ($dataStorage[$index]) {
		$index*=7;
		$index%=$self->{storageSize};
		if ($index == $start) {
			print "No space left\n";
			return 0;
		}
	}
	
	$self->{dataStorage}[$index] = $aKey;
	return 1;
}

sub find {
	my $self = shift;
	my $anObject = $_[0];
	my $aKey = $anObject->getKey();
	my $index = keyToIndex($aKey);
	my $start = $index;
	my @dataStorage = $self->{dataStorage};

	
	while ($dataStorage[$index]) {
		$index*=7;
		$index%=$self->{storageSize};
		if ($index == $start) {
			return -1;
		}
	}
	return $dataStorage[$index];
}

sub printMap {
	my $self = shift;
	my @dataStorage = $self->{dataStorage};
	print "|-----------|\n";
	for (my $i = 0; $i < $self->{storageSize}; $i++) {

		if ($dataStorage[$i]) {
			print "| $i   | -> " . $dataStorage[$i] . "\n";
		} else {
			print "| $i   |\n";
		}
	}
	print "|-----------|\n\n\n";
	my $size = @dataStorage;
	
	print "size: $size\n\n\n";

}


1;