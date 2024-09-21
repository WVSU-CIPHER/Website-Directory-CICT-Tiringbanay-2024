import groups from "@/data/groups";
import students from "@/data/students";


/**
 * Logs the names of students in a specific group
 * @param {number} groupKey - The key of the group to log
 */
export function logStudentsInGroup(groupKey) {
    // Find the group with the matching key
    const group = groups.find(g => g.key === groupKey)

    if (!group) {
        console.error(`Group with key ${groupKey} does not exist.`)
        return
    }

    console.log(`Logging students in group: ${group.name}`)

    // Use slice to get the students for this group, then forEach to log their names
    students.slice(group.startIndex, group.endIndex).forEach((student) => {
        console.log(student.name)
    })
}

/**
 * Logs the names of students in all groups
 */
export function logAllStudents() {
    groups.forEach((group) => {
        console.log(`\nGroup ${group.key}: ${group.name}`)
        students.slice(group.startIndex, group.endIndex).forEach((student) => {
            console.log(`- ${student.name}`)
        })
    })
}

/**
 * Gets the group for a given student
 * @param {Object} student - The student object
 * @returns {Object|null} The group object or null if not found
 */
export function getStudentGroup(student) {
    const studentIndex = students.indexOf(student)
    return groups.find(group =>
        studentIndex >= group.startIndex && studentIndex < group.endIndex
    ) || null
}