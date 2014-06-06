import java.util.Date;

class HashDemo {
	
	public static void main(String[] args) {
		
		System.out.println("Loading Dictionary");
		Dictionary theDictionary = new Dictionary();
		int wordCount = theDictionary.getWordCount();
		int successCount = 0;
		
		System.out.println("Dictionary has " + wordCount + " words");
		
		System.out.println("Beginning hash calculations...");
		
		NatesHashTable theHashTable = new NatesHashTable(wordCount*2.31);
		
		Date startTime = new Date();
		
		for (int i = 0; i < wordCount; i++) {
			if ((successCount % 1000) == 0) {
				System.out.println(successCount + " words hashed");
			}
			if (theHashTable.insert(new NatesDataObject(theDictionary.wordAtIndex(i)))) {
				successCount++;
			} else {
				break;
			};
		}
		
		Date endTime = new Date();
		
		System.out.println("Hashing complete, printing map");
		
		theHashTable.printMap();
		
		System.out.println( successCount + " words hashed in " + (endTime.getTime() - startTime.getTime()) + "ms");
		
	}
	
}