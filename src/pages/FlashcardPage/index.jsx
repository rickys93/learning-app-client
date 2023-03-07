import React from 'react'
import { useParams } from 'react-router-dom'
import { Flashcard } from '../../components'


export default function FlashcardPage() {
  const { categoryId } = useParams()
  console.log(categoryId)
  return (
    <div><Flashcard/></div>
  )
}
