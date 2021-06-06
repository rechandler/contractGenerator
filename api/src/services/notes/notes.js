import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { ValidationError} from '@redwoodjs/api'

export const notes = async ({ id, type }) => {
  requireAuth();
  const notes = await db[type].findUnique({ where: {id: id}}).notes()
  return notes.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
}

export const Note = {
  Contract: (_obj, { root }) =>
    db.note.findUnique({ where: { id: root.id } }).Contract(),
}

export const createNote = async ({ input }) => {
  requireAuth();
  const result = await db[input.type].update({
    where: {
      id: input.id
    },
    data: {
      notes: {
        create: {
          message: input.message,
          author: input.author,
          userId: input.userId
        }
      }
    },
    include: {
      notes: {
        orderBy: {
          createdAt: 'asc'
        }
      }
    }
  });

  // Only return the newly created Note
  return result.notes.pop();
}

export const deleteNote = async ({ id, contractId, userId, type }) => {
  requireAuth();

  // can only delete notes you created or if your an admin
  if (userId && userId !== context.currentUser.id && !requireAuth('admin')) {
    throw new ValidationError("Can't delete note, only the note creator or admin can delete the note")
  }

  await db.note.delete({ where: { id: id }})
  return await notes({id: contractId, type})
}
