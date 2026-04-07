"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Task = {
  id: number
  title: string
  completed: boolean
}

type Filter = "all" | "active" | "completed"

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState("")
  const [filter, setFilter] = useState<Filter>("all")

  const addTask = () => {
    if (inputValue.trim() === "") return
    const newTask: Task = {
      id: Date.now(),
      title: inputValue.trim(),
      completed: false,
    }
    setTasks([...tasks, newTask])
    setInputValue("")
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const remainingTasks = tasks.filter((task) => !task.completed).length

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold text-foreground">
          Task Manager
        </h1>

        <div className="flex gap-2 mb-6">
          <Input
            type="text"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "active" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("active")}
          >
            Active
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
        </div>

        <ul className="space-y-2 mb-6">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer rounded-lg border border-border p-3 transition-colors hover:bg-accent ${
                task.completed
                  ? "bg-muted text-muted-foreground line-through"
                  : "bg-card text-card-foreground"
              }`}
            >
              {task.title}
            </li>
          ))}
          {filteredTasks.length === 0 && (
            <li className="text-center text-muted-foreground py-4">
              No tasks to show
            </li>
          )}
        </ul>

        <p className="text-center text-sm text-muted-foreground">
          {remainingTasks} {remainingTasks === 1 ? "task" : "tasks"} remaining
        </p>
      </div>
    </main>
  )
}
