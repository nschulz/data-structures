public class NatesHashTable {
	
	private NatesDataObject[] dataStorage;
	private int storageSize = 477;
	private String alphaMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	public NatesHashTable() {
		dataStorage = new NatesDataObject[storageSize];
	}
	public NatesHashTable(double customSize) {
		storageSize = (int)customSize;
		
		dataStorage = new NatesDataObject[storageSize];
	}
	
	private int keyToIndex(String key) {
		int keyValue = 0;
		for (char c: key.toCharArray()) {
			keyValue += alphaMap.indexOf(c);
		}
		return keyValue%storageSize;
	}
	
	public boolean insert(NatesDataObject anObject) {
		String aKey = anObject.getKey();
		int index = keyToIndex(aKey);
		int start = index;
		
		while (dataStorage[index] != null) {
			index*=7;
			index %= storageSize;
			if (index == start) {
				System.out.println("No space left");
				return false;
			}
		}
		
		dataStorage[index] = anObject;
		return true;
	}
	
	public NatesDataObject find(String aKey) {
		int index = keyToIndex(aKey);
		int start = index;
		while (dataStorage[index].getKey() != aKey) {
			index*=7;
			index %= storageSize;
			if (index == start) return null;
		}
		return dataStorage[index];
	}
	
	public void printMap() {
		System.out.println("|-----------|");
		for (int i = 0; i < storageSize; i++) {
			if (dataStorage[i] == null) {
				System.out.println("| " + i + "   |");
			} else {
				System.out.println("| " + i + "   | " + dataStorage[i].getKey());
			}
		}
		System.out.println("|-----------|");
	}
	
}