#! /bin/perl

use strict;
use NatesHashTable;
use NatesDataObject;

open(my $FILE_HANDLE, 'WORDS_LIST.data') or die("Unable to find words data file");

my @WORDS_LIST = <$FILE_HANDLE>;
chomp(@WORDS_LIST);

close($FILE_HANDLE);

my $wordCount = scalar @WORDS_LIST;

print "$wordCount words loaded, beginning hash...\n";

my $theHashTable = NatesHashTable->new( $wordCount * 2.31 );
my $successCount = 0;

foreach my $word (@WORDS_LIST) {

 	my $obj = NatesDataObject->new($word);
 	if ($theHashTable->insert($obj)) {
 		$successCount++;
 	} else {
 		last;
 	}
}

print "$successCount words hashed\n";

$theHashTable->printMap();