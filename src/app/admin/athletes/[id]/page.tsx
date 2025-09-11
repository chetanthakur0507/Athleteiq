"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AthleteProfile() {
  const athlete = {
    id: 1,
    name: "Rahul Sharma",
    age: 20,
    gender: "Male",
    sport: "Football",
    state: "Delhi",
    status: "Verified",
    results: [
      { test: "Vertical Jump", score: "52 cm", status: "Verified" },
      { test: "Sit-ups", score: "48 reps", status: "Verified" },
      { test: "Shuttle Run", score: "9.8 sec", status: "Pending" },
    ],
  }

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">{athlete.name}</CardTitle>
            <Badge variant={athlete.status === "Verified" ? "default" : "secondary"}>
              {athlete.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div>
            <p><strong>Age:</strong> {athlete.age}</p>
            <p><strong>Gender:</strong> {athlete.gender}</p>
            <p><strong>Sport:</strong> {athlete.sport}</p>
          </div>
          <div>
            <p><strong>State:</strong> {athlete.state}</p>
            <p><strong>ID:</strong> #{athlete.id}</p>
          </div>
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Verified Results</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="min-w-full border text-sm">
            <thead>
              <tr>
                <th className="border px-2 py-1">Test</th>
                <th className="border px-2 py-1">Score</th>
                <th className="border px-2 py-1">Status</th>
              </tr>
            </thead>
            <tbody>
              {athlete.results.map((result, idx) => (
                <tr key={idx}>
                  <td className="border px-2 py-1">{result.test}</td>
                  <td className="border px-2 py-1">{result.score}</td>
                  <td className="border px-2 py-1">
                    <Badge variant={result.status === "Verified" ? "default" : "outline"}>
                      {result.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-end gap-3">
            <Button variant="outline" asChild>
              <Link href="/admin/athletes">Back</Link>
            </Button>
            <Button>Verify Athlete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
