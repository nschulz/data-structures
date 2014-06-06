package NatesDataObject;
use strict;

sub new {
	my $class = shift;
	my $self = bless({}, $class);
	
	my $key = $_[0];
	
	$self->{key} = $key;
	return $self;
}

sub getKey {
	my $self = shift;
	return $self->{key}
}

1;