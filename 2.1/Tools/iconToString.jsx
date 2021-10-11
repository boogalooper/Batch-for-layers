var infile = File ("/e/111.png");
var outfile = File ("/e/111.txt");
infile.open ("r"); infile.encoding = "binary";
var temp = infile.read(); infile.close();
outfile.open ("w");
outfile.write (temp.toSource ());
outfile.close ();