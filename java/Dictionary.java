import java.io.*;
import java.util.ArrayList;

public class Dictionary extends Object {

	private ArrayList words;
	
	public String wordAtIndex(int anIndex) {
		return (String) words.get(anIndex);
	}
	
	public int getWordCount() {
		return words.size();
	}
	
	public Dictionary() {
		words = new ArrayList();
		try{
			BufferedReader reader = new BufferedReader(new FileReader("WORDS_LIST.data"));
			String word = reader.readLine();
			
			while (word != null) {
				words.add(word);
				word = reader.readLine();
			}
		} catch (Exception e) {
			return;
		}
	}

}