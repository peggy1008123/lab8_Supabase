import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://jizqhmhxvcgsdlxpeerz.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppenFobWh4dmNnc2RseHBlZXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjczODEsImV4cCI6MjA1NzIwMzM4MX0.S2CapTWqhGHvWOXw8oJCCPItm-s6FaP2OyitE-aXP4A'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getMembers() {
  let { data: Members, error } = await supabase
    .from('Books')
    .select('*')
  
  for (let book of Members) {
    let memberList = document.getElementById('books');
    memberList.innerHTML += `<tr><td>${book.Title}</td><td>${book.Author}</td><td>${book.ISBN}</tr>`;
   }
}

getMembers();