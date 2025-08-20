# ServiceNow CSA Exam Cheat Sheet

## Core Tables
| Table Name         | Purpose                                  |
|--------------------|------------------------------------------|
| `sys_user`         | Stores Users                             |
| `sys_user_group`   | Stores Groups                            |
| `sys_user_role`    | Stores Roles                             |
| `incident`         | Incidents (extends Task)                 |
| `problem`          | Problems (extends Task)                  |
| `change_request`   | Changes (extends Task)                   |
| `task`             | Parent table for work-related records    |
| `cmdb_ci`          | Base CI table in CMDB                    |
| `cmdb_rel_ci`      | Relationships between CIs                |
| `sys_db_object`    | Stores all table definitions             |
| `sys_dictionary`   | Defines fields in tables                 |
| `sys_choice`       | Stores choice list values                |

## Key Roles
| Role              | Description                                |
|-------------------|--------------------------------------------|
| `admin`           | Full access to everything                  |
| `itil`            | Basic ITSM role (work on Incidents, etc.)  |
| `approver_user`   | Can approve requests                       |
| `catalog_admin`   | Manages Service Catalog                    |
| `catalog_editor`  | Can edit catalog items                     |
| `knowledge_manager` | Manages knowledge bases/articles         |
| `report_admin`    | Manages reports and dashboards             |

## Navigation & UI
| Concept           | Description                                |
|-------------------|--------------------------------------------|
| List              | Multiple records view                      |
| Form              | Single record view/edit                    |
| List Layout       | Controls visible columns                   |
| Form Layout       | Controls visible fields                    |
| Schema Map        | Shows table relationships                  |
| Breadcrumbs       | Represent filters                          |

## Process Automation
| Tool/Concept       | Purpose                                   |
|--------------------|-------------------------------------------|
| Flow Designer      | Modern no-code automation tool            |
| Workflow Editor    | Legacy automation (still tested)          |
| Catalog Item       | Orderable item (e.g., laptop)             |
| Record Producer    | Catalog item that creates records         |
| Order Guide        | Bundle of items                           |

## Update Sets
| Concept            | Description                               |
|--------------------|-------------------------------------------|
| Update Set         | Captures config/customizations            |
| Best Practice      | One per project/feature                   |
| Not Captured       | Data, schedules, users, groups, roles     |

## Security
| Concept            | Description                               |
|--------------------|-------------------------------------------|
| ACL (Access Control List) | Controls access to tables/fields   |
| ACL Evaluation     | Role → Condition → Script                 |
| Roles              | Bundle of permissions                     |
| Groups             | Bundle of users (can inherit roles)       |

## Data Management
| Concept            | Description                               |
|--------------------|-------------------------------------------|
| Import Set Table   | Staging area for imported data            |
| Transform Map      | Maps import set → target table            |
| Coalesce           | Key for detecting duplicates              |
| Data Sources       | Source of data (CSV, JDBC, LDAP, etc.)    |

## Notifications
| Concept            | Description                               |
|--------------------|-------------------------------------------|
| Triggered By       | Events, records, workflows                |
| Delivery           | Email, SMS, Push                          |
| Example            | `gs.eventQueue()` triggers events         |

## Reports & Dashboards
| Concept            | Description                               |
|--------------------|-------------------------------------------|
| Report Types       | List, Pie, Bar, Pivot, Calendar           |
| Dashboards         | Multiple reports/widgets in one view      |
| Scheduled Reports  | Auto-send via email                       |

## System Administration
| Concept            | Description                               |
|--------------------|-------------------------------------------|
| Application Scope  | Boundary that separates apps/customizations |
| Cloning            | Copy data/configs between instances       |
| Upgrade            | Apply new ServiceNow release              |
| System Logs        | Errors, warnings, debugging               |

## Scripting Awareness
| Script Type        | Runs Where   | Purpose                                  |
|--------------------|--------------|------------------------------------------|
| Client Script      | Browser      | onLoad, onChange, onSubmit, onCellEdit   |
| Business Rule      | Server       | Before, After, Async, Display            |
| UI Policy          | Browser      | Show/hide/require fields (no script)     |
| GlideRecord        | Server       | Query/update DB records                  |
| GlideSystem (`gs`) | Server       | Utilities (`gs.log`, `gs.eventQueue`)    |

---

## High-Yield Tips
- Prefer **configuration** over customization.  
- **Service Catalog** shows up a lot.  
- Know what **Update Sets DON’T capture**.  
- ACL order = Role → Condition → Script.  
- Practice **Import Sets & Transform Maps**.  
