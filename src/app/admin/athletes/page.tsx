"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AthletesList() {
  const athletes = [
    { id: 1, name: "Rahul Sharma", sport: "Football", state: "Delhi", status: "Verified" },
    { id: 2, name: "Aman Verma", sport: "Cricket", state: "UP", status: "Pending" },
    { id: 3, name: "Karan Singh", sport: "Athletics", state: "Punjab", status: "Verified" },
  ]

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Athlete Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input placeholder="Search athletes..." className="w-[250px]" />
            <Button>+ Add Athlete</Button>
          </div>
          <table className="min-w-full border text-sm">
            <thead>
              <tr>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Sport</th>
                <th className="border px-2 py-1">State</th>
                <th className="border px-2 py-1">Status</th>
                <th className="border px-2 py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {athletes.map((athlete) => (
                <tr key={athlete.id}>
                  <td className="border px-2 py-1">{athlete.name}</td>
                  <td className="border px-2 py-1">{athlete.sport}</td>
                  <td className="border px-2 py-1">{athlete.state}</td>
                  <td className="border px-2 py-1">
                    <Badge variant={athlete.status === "Verified" ? "default" : "destructive"}>
                      {athlete.status}
                    </Badge>
                  </td>
                  <td className="border px-2 py-1">
                    <Link href={`/admin/athletes/${athlete.id}`}>
                      <Button variant="outline" size="sm">View</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
