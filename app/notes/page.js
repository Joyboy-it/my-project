import { createClient } from '@supabase/supabase-js'

export default async function NotesPage() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const { data: notes } = await supabase.from('notes').select()

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">บันทึกทั้งหมด2225555</h1>
            <ul>
                {notes?.map((note) => (
                    <li key={note.id} className="mb-2 p-4 border rounded">
                        <h2 className="font-bold">{note.title}</h2>
                        <p>{note.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
