val initial = List("doodle", "Cons", "bible", "Army")
val sorted = initial.sortWith((s: String, t: String) 
   => s.charAt(0).toLower < t.charAt(0).toLower)
println(sorted)
